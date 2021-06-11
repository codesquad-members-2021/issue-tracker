//
//  LoginByGitHub.swift
//  issue-tracker
//
//  Created by jinseo park on 6/10/21.
//

import Foundation
import AuthenticationServices

final class GithubAuthorizationManager: NSObject, ASWebAuthenticationPresentationContextProviding {
    
    private let url = "https://github.com/login/oauth/authorize"
    private let client_id = "1f8b844e0951dd8b43cb"
    private let redirect_uri = "issuetracker://login"
    private let callbackUrlScheme = "issuetracker"
    
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
            //            print("code = ",code)
            
            let networkmanager = NetworkManager()
            networkmanager.setInfoGithub(with: code) { (result: Result<OAuthResponse,Error>) in
                switch result {
                case .success(let jwtResponse):
                    let loginInfo = LoginInfo(jwt: jwtResponse.jwt, avatarURL: jwtResponse.avatarUrl, name: jwtResponse.loginId)
                    self.delegate?.didGithubLoginSuccess(with: loginInfo) 
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

