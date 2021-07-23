//
//  MainCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit
import KeychainSwift

final class AppCoordinator: Coordinator {

    var navigation: UINavigationController

    struct Dependency {
        var loginCoordinatorFactory: (UINavigationController) -> LoginViewCoordinator
        var tabBarCoordinatorFactory: ((UINavigationController) -> TabBarCoordinator)
    }

    private var loginCoordinator: LoginViewCoordinator
    private let tabBarCoordinator: TabBarCoordinator
    private var tokenState: Bool {
        KeychainSwift().get("token")?.isEmpty ?? true
    }

    init(navigation: UINavigationController = UINavigationController(),
         dependency: Dependency) {
        self.navigation = navigation

        self.loginCoordinator = dependency.loginCoordinatorFactory(navigation)
        self.tabBarCoordinator = dependency.tabBarCoordinatorFactory(navigation)
    }

    func loadInitalView() {
        if tokenState {
            showLoginFlow()
        } else {
            showTabBarFlow()
        }
    }

    private func showLoginFlow() {
        loginCoordinator.authenticated = {
            self.showTabBarFlow()
        }
        loginCoordinator.loadInitalView()
    }

    private func showTabBarFlow() {
        tabBarCoordinator.loadInitalView()
    }
}
