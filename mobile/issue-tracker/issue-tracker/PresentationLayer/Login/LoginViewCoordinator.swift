//
//  LoginViewCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

protocol LoginViewCoordinatorDependencies {
    func makeLoginViewController() -> LoginViewController
}

protocol LoginViewCoordinatorDelegate: AnyObject {
    func completeLogin()
}

final class LoginViewCoordinator: Coordinator {
    var navigation: UINavigationController?

    private let loginViewControllerFactory: () -> LoginViewController
    weak var delegate: LoginViewCoordinatorDelegate?

    init(navigation: UINavigationController,
         dependency: LoginViewCoordinatorDependencies) {
        self.navigation = navigation
        loginViewControllerFactory = dependency.makeLoginViewController
    }

    func start() {
        let loginViewController = loginViewControllerFactory()
        loginViewController.delegate = self
        navigation?.setViewControllers([loginViewController], animated: true)
    }
}

extension LoginViewCoordinator: LoginViewControllerDelegate {
    func didFinishLogin() {
        delegate?.completeLogin()
    }
}
