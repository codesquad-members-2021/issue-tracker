//
//  LoginViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit
import AuthenticationServices

final class LoginViewController: UIViewController {

    private let loginViewModel = LoginViewModel()
    private var webAuthSession: ASWebAuthenticationSession?
    private let callbackUrlScheme = "issue-Tracker"

    @IBAction func loginButtonTouched(_ sender: Any) {
        setupAuthSession()
        configureAuthSession()
        webAuthSession?.start()
    }

    private func setupAuthSession() {
        guard let url = GithubConfiguration.url() else {
            return
        }

        webAuthSession = ASWebAuthenticationSession.init(url: url, callbackURLScheme: callbackUrlScheme, completionHandler: { (callBack: URL?, error: Error?) in
            guard error == nil, let successURL = callBack else {
                return
            }
            let queryItems = URLComponents(string: successURL.absoluteString)?.queryItems
            let code = queryItems?.filter({ $0.name == "code" }).first?.value
            print(code)
        })
    }

    private func configureAuthSession() {
        webAuthSession?.presentationContextProvider = self
//        webAuthSession?.prefersEphemeralWebBrowserSession = true
    }
}

extension LoginViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
}
