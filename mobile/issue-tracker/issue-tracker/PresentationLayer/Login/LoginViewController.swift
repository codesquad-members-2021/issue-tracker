//
//  LoginViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit
import Combine
import AuthenticationServices

final class LoginViewController: UIViewController {

    private let loginViewModel = LoginViewModel()
    private var webAuthSession: ASWebAuthenticationSession?
    private let callbackUrlScheme = "issue-Tracker"

    private var cancellable = Set<AnyCancellable>()

    override func viewDidLoad() {
        bind()
    }

    @IBAction func loginButtonTouched(_ sender: Any) {
        setupAuthSession()
        webAuthSession?.presentationContextProvider = self
        webAuthSession?.start()
    }

    private func setupAuthSession() {
        guard let url = GithubConfiguration.url() else {
            return
        }

        webAuthSession = ASWebAuthenticationSession.init(url: url,
                                                         callbackURLScheme: callbackUrlScheme,
                                                         completionHandler: { [weak self] (callBack: URL?, error: Error?) in
            guard error == nil, let successURL = callBack else {
                return
            }
            let queryItems = URLComponents(string: successURL.absoluteString)?.queryItems
            let code = queryItems?.filter { $0.name == "code" }.first?.value ?? ""
            self?.loginViewModel.fetchToken(to: Auth(code: code))
        })
    }

    private func bind() {
        loginViewModel.fetchErrorMessage()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] message in
                self?.present(Alert.create(title: message), animated: true)
        }.store(in: &cancellable)

        loginViewModel.fetchCompltion()
            .receive(on: DispatchQueue.main)
            .sink { _ in
                ViewSwitcher.updateViewController()
            }.store(in: &cancellable)
    }
}

extension LoginViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
}
