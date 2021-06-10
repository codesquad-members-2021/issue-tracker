//
//  LoginByGitHub.swift
//  issue-tracker
//
//  Created by jinseo park on 6/10/21.
//

import Foundation
import AuthenticationServices
import KeychainAccess

final class GithubAuthorizationManager: NSObject, ASWebAuthenticationPresentationContextProviding {
    
    private let keychain = Keychain()
    var webAuthSession: ASWebAuthenticationSession?
    
    private weak var viewController: UIViewController?
    private weak var delegate: GithubLoginManagerDelegate?
    
    init(viewController: UIViewController, delegate: GithubLoginManagerDelegate) {
        self.viewController = viewController
        self.delegate = delegate
    }
    
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return viewController?.view.window ?? ASPresentationAnchor()
    }
}

extension GithubAuthorizationManager: GithubLoginManagable {
    
    func login(){
        guard let url = keychain["github_OAuthURLString"] else {return}
        guard let client_id = keychain["github_client_id"] else {return}
        guard let redirect_uri = keychain["github_redirect_uri"] else {return}
        guard let callbackUrlScheme = keychain["github_callbackUrlScheme"] else { return }
        
        var components = URLComponents(string: url)!
        components.queryItems = [
            URLQueryItem(name: "client_id", value: client_id),
            URLQueryItem(name: "redirect_uri", value: redirect_uri)
        ]

        webAuthSession = ASWebAuthenticationSession.init(url: components.url!, callbackURLScheme: callbackUrlScheme, completionHandler: { (callbackURL:URL?, error:Error?) in
            
            guard error == nil, let successURL = callbackURL else {
                return
            }
            
            guard let code = NSURLComponents(string: (successURL.absoluteString))?.queryItems?.filter({$0.name == "code"}).first?.value else { return }
            print("code = ",code)
            
            let networkmanager = NetworkManager()
            networkmanager.setInfoGithub(with: code) { (result: Result<OAuthResponse,Error>) in
                switch result {
                case .success(let jwtResponse):
                    print("response=",jwtResponse)
                    self.keychain["github_jwt"] = jwtResponse.avatarUrl
                    self.keychain["github_avatarUrl"] = jwtResponse.jwt
                    self.keychain["github_loginId"] = jwtResponse.loginId
                    self.delegate?.didGithubLoginSuccess() //위에서 이미 keychain에 넣어서 인자값 뺐음.
                case .failure(let error):
                    print("error",error)
                    self.delegate?.didGithubLoginFail(with: error)
                }
            }
        })
        webAuthSession?.presentationContextProvider = self
        webAuthSession?.start()
    }
}

