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
    private var cancellable = Set<AnyCancellable>()

    override func viewDidLoad() {
        bind()
    }

    @IBAction func loginButtonTouched(_ sender: Any) {
        loginViewModel.fetctGithubLogin(from: self)
    }

    private func bind() {
        loginViewModel.fetchErrorMessage()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] message in
                self?.present(Alert.create(title: message), animated: true)
            }.store(in: &cancellable)

        loginViewModel.AuthorizeCompltion()
            .receive(on: DispatchQueue.main)
            .sink { _ in
                ViewSwitcher().updateViewController()
            }.store(in: &cancellable)
    }
}

extension LoginViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
}
