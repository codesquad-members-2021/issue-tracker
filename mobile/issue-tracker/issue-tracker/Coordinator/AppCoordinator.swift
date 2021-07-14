//
//  MainCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

protocol AppCoordinatorDependencies {
    func makeLoginViewCoordinator(navigation: UINavigationController, dependency: LoginViewCoordinatorDependencies) -> LoginViewCoordinator
    func makeTabBarCoordinator(navigation: UINavigationController, dependency: TabBarCoordinatorDependencies) -> TabBarCoordinator
}

final class AppCoordinator: Coordinator {

    var navigation: UINavigationController?

    typealias dependency = AppCoordinatorDependencies & LoginViewCoordinatorDependencies & TabBarCoordinatorDependencies
    private var loginViewCoordinatorDependenies: LoginViewCoordinator
    private var tabBarViewControllerFactory: TabBarCoordinator

    init(navigation: UINavigationController = UINavigationController(),
         dependency: dependency) {
        self.navigation = navigation
        loginViewCoordinatorDependenies = dependency.makeLoginViewCoordinator(navigation: navigation,
                                                                              dependency: dependency)
        tabBarViewControllerFactory = dependency.makeTabBarCoordinator(navigation: navigation,
                                                                       dependency: dependency)
    }

    func start() {
        let intialViewController = IntialViewController()
        navigation?.pushViewController(intialViewController, animated: true)
    }

    func showLoginFlow() {
        loginViewCoordinatorDependenies.start()
    }

    func showTabBarFlow() {
        tabBarViewControllerFactory.start()
    }

}
