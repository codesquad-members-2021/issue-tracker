//
//  MainCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit
import KeychainSwift

protocol AppCoordinatorDependencies {
    func makeLoginViewCoordinator(navigation: UINavigationController, dependency: LoginViewCoordinatorDependencies) -> LoginViewCoordinator
    func makeTabBarCoordinator(navigation: UINavigationController, dependency: TabBarCoordinatorDependencies) -> TabBarCoordinator
}

final class AppCoordinator: Coordinator {

    var navigation: UINavigationController?

    typealias dependency = AppCoordinatorDependencies & LoginViewCoordinatorDependencies & TabBarCoordinatorDependencies
    private var loginCoordinator: LoginViewCoordinator
    private var tabBarCoordinator: TabBarCoordinator

    init(navigation: UINavigationController = UINavigationController(),
         dependency: dependency) {
        self.navigation = navigation
        loginCoordinator = dependency.makeLoginViewCoordinator(navigation: navigation,
                                                               dependency: dependency)
        tabBarCoordinator = dependency.makeTabBarCoordinator(navigation: navigation,
                                                             dependency: dependency)
    }

    func start() {
        if isEmptyToken() {
            showLoginFlow()
        } else {
            showTabBarFlow()
        }
    }

    private func showLoginFlow() {
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
