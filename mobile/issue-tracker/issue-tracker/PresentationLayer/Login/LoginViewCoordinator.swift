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

final class LoginViewCoordinator: Coordinator {
    var navigation: UINavigationController?

    private let loginViewControllerFactory: () -> LoginViewController

    init(navigation: UINavigationController,
         dependency: LoginViewCoordinatorDependencies) {
        self.navigation = navigation
        loginViewControllerFactory = dependency.makeLoginViewController
    }

    func start() {
        let loginViewController = loginViewControllerFactory()
        navigation?.present(loginViewController, animated: true)
    }
}
