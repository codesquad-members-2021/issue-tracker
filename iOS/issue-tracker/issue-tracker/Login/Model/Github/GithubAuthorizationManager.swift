//
//  LoginByGitHub.swift
//  issue-tracker
//
//  Created by jinseo park on 6/10/21.
//

import AuthenticationServices

final class GithubAuthorizationManager: NSObject, ASWebAuthenticationPresentationContextProviding {
    
    private let url = "https://github.com/login/oauth/authorize"
    private let client_id = "1f8b844e0951dd8b43cb"
    private let redirect_uri = "issuetracker://login"
    private let callbackUrlScheme = "issuetracker"
    
    var webAuthSession: ASWebAuthenticationSession?
    
    private weak var viewController: UIViewController?
    private weak var delegate: SocialLoginManagerDelegate?
    private var keyChainSaver: LoginKeyChainManager
    
    init(viewController: UIViewController, delegate: SocialLoginManagerDelegate, keyChainSaver: LoginKeyChainManager) {
        self.viewController = viewController
        self.delegate = delegate
        self.keyChainSaver = keyChainSaver
    }
    
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return viewController?.view.window ?? ASPresentationAnchor()
    }
    
}

extension GithubAuthorizationManager: SocialLoginManagable {
    
    func login(){
        
        if let loginInfo = keyChainSaver.read() {
            self.delegate?.didSocialLoginSuccess(with: loginInfo)
            return
        }
        
        var components = URLComponents(string: url)!
        components.queryItems = [
            URLQueryItem(name: "client_id", value: client_id),
            URLQueryItem(name: "redirect_uri", value: redirect_uri)
        ]
        
        webAuthSession = ASWebAuthenticationSession.init(url: components.url!, callbackURLScheme: callbackUrlScheme, completionHandler: { (callbackURL: URL?, error: Error?) in
            
            guard error == nil, let successURL = callbackURL else { return }
            
            let codeKey = Parameter.code.key()
            
            guard let code = NSURLComponents(string: (successURL.absoluteString))?
                    .queryItems?.filter({$0.name == codeKey})
                    .first?
                    .value else { return }

            let url = EndPoint.OAuth.fullAddress()
            let parameter = [codeKey: code]
            let requestManager = RequestManager(url: url)
            let networkmanager = NetworkManager(requestManager: requestManager)

            networkmanager.get(queryParameters: parameter) { [weak self] (result: Result<OAuthResponseDTO, NetworkError>) in
                guard let self = self else { return }
                switch result {
                case .success(let response):
                    let loginInfoDTO = LoginInfoDTO(userID: nil,
                                              jwt: response.jwt,
                                              avatarURL: response.avatarUrl,
                                              name: response.loginId)
                    
                    if self.keyChainSaver.save(loginInfoDTO) {
                        self.delegate?.didSocialLoginSuccess(with: loginInfoDTO)
                    } else {
                        let saveError = LoginError.keyChainSave
                        self.delegate?.didSocialLoginFail(with: saveError)
                    }
                case .failure:
                    let githubLoginError = LoginError.githubIDAccess
                    self.delegate?.didSocialLoginFail(with: githubLoginError)
                }
            }
        })
        webAuthSession?.presentationContextProvider = self
        webAuthSession?.start()
    }
}

