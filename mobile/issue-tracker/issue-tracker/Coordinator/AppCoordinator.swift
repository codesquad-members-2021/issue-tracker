//
//  MainCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit
import KeychainSwift

final class AppCoordinator: Coordinator {

    var navigation: UINavigationController?

    struct Dependency {
        var loginCoordinatorFactory: (UINavigationController) -> LoginViewCoordinator
        var tabBarCoordinatorFactory: ((UINavigationController) -> TabBarCoordinator)
    }

    private let loginCoordinator: LoginViewCoordinator
    private let tabBarCoordinator: TabBarCoordinator

    init(navigation: UINavigationController = UINavigationController(),
         dependency: Dependency) {
        self.navigation = navigation

        self.loginCoordinator = dependency.loginCoordinatorFactory(navigation)
        self.tabBarCoordinator = dependency.tabBarCoordinatorFactory(navigation)
    }

    func start() {
        if isEmptyToken() {
            showLoginFlow()
        } else {
            showTabBarFlow()
        }
    }

    private func showLoginFlow() {
        loginCoordinator.delegate = self
        loginCoordinator.start()
    }

    private func showTabBarFlow() {
        tabBarCoordinator.start()
    }

    private func isEmptyToken() -> Bool {
        guard let toggle = KeychainSwift().get("token")?.isEmpty else {
            return true
        }
        return toggle
    }
}

extension AppCoordinator: LoginViewCoordinatorDelegate {
    func completeLogin() {
        showTabBarFlow()
    }
}
