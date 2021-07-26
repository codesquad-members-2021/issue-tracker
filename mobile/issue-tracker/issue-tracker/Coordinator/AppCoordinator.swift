//
//  MainCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

final class AppCoordinator: Coordinator {

    var navigation: UINavigationController

    struct Dependency {
        var loginCoordinatorFactory: (UINavigationController) -> LoginViewCoordinator
        var tabBarCoordinatorFactory: ((UINavigationController) -> TabBarCoordinator)
    }

    struct TokenState {
        var token: TokenAction = .initial
    }

    private var loginCoordinator: LoginViewCoordinator
    private let tabBarCoordinator: TabBarCoordinator

    var dispatch: ((TokenAction) -> Void)?

    init(navigation: UINavigationController = UINavigationController(),
         dependency: Dependency) {
        self.navigation = navigation

        self.loginCoordinator = dependency.loginCoordinatorFactory(navigation)
        self.tabBarCoordinator = dependency.tabBarCoordinatorFactory(navigation)
    }

    func loadInitalView() {
        dispatch?(.initial)
    }

    func update(with state: TokenState) {
        switch state.token {
        case .empty:
            showLoginFlow()
        case .existent, .completed:
            showTabBarFlow()
        case .initial:
            break
        }
    }

    private func showLoginFlow() {
        loginCoordinator.authenticated = dispatch
        loginCoordinator.loadInitalView()
    }

    private func showTabBarFlow() {
        tabBarCoordinator.loadInitalView()
    }
}

extension AppCoordinator.TokenState {
    init(state: AppStore.State) {
        token = state.token
    }
}
