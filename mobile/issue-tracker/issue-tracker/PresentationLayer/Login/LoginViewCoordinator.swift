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

struct LoginViewCoordinator: Coordinator {
    var navigation: UINavigationController
    var authenticated: ((TokenAction) -> Void)?

    private let loginViewControllerFactory: () -> LoginViewController

    init(navigation: UINavigationController,
         dependency: LoginViewCoordinatorDependencies) {
        self.navigation = navigation
        loginViewControllerFactory = dependency.makeLoginViewController
    }

    func loadInitalView() {
        let loginViewController = loginViewControllerFactory()
        loginViewController.authorizeCompleteHandler = authenticated
        navigation.setViewControllers([loginViewController], animated: true)
    }
}
