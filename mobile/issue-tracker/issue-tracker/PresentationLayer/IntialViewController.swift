//
//  IntialViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/21.
//

import UIKit
import KeychainSwift

class IntialViewController: UIViewController {

    private var viewHandler: ((UIViewController) -> Void)?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground

        viewHandler = { viewController in
            viewController.modalPresentationStyle = .fullScreen
            self.present(viewController, animated: true)
        }
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        viewHandler?(selectViewController())
    }

    private func selectViewController() -> UIViewController {
        if KeychainSwift().get("token")?.isEmpty ?? true {
            let loginViewController = UIStoryboard().create(name: "Login", type: LoginViewController.self)
            let loginViewModel = LoginViewModel()
            loginViewModel.errorHandler = loginViewController.showError(from:)
            loginViewModel.onDismiss = loginViewController.authorizeCompltion
            loginViewController.githubLoginHandler = loginViewModel.fetctGithubLogin(viewController:)
            return loginViewController
        }

        return UIStoryboard().create(name: "Main", type: UITabBarController.self)
    }
}
