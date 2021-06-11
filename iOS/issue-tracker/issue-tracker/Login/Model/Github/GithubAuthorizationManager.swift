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
        var components = URLComponents(string: url)!
        components.queryItems = [
            URLQueryItem(name: "client_id", value: client_id),
            URLQueryItem(name: "redirect_uri", value: redirect_uri)
        ]
        
        webAuthSession = ASWebAuthenticationSession.init(url: components.url!, callbackURLScheme: callbackUrlScheme, completionHandler: { (callbackURL: URL?, error: Error?) in
            
            guard error == nil, let successURL = callbackURL else { return }
            
            guard let code = NSURLComponents(string: (successURL.absoluteString))?
                    .queryItems?.filter({$0.name == "code"})
                    .first?
                    .value else { return }

            let networkmanager = NetworkManager()
            
            networkmanager.setInfoGithub(with: code) { [weak self] (result: Result<OAuthResponseDTO, Error>) in
                guard let self = self else { return }
                switch result {
                case .success(let response):
                    let loginInfo = LoginInfo(deviceID: nil,
                                              jwt: response.jwt,
                                              avatarURL: response.avatarUrl,
                                              name: response.loginId)
                    if !self.keyChainSaver.save(loginInfo) {
                        let saveError = LoginError.keyChainSave
                        self.delegate?.didSocialLoginFail(with: saveError)
                    } else {
                        self.delegate?.didSocialLoginSuccess(with: loginInfo)
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

