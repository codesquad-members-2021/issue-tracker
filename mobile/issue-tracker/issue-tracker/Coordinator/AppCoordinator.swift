//
//  MainCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

protocol AppCoordinatorDependencies {
    func makeloginViewController() -> LoginViewController
    func makeTabBarViewController() -> TabBarViewController
}

final class AppCoordinator: Coordinator {

    var navigation: UINavigationController?

    private var loginViewControllerFactory: () -> LoginViewController
    private var tabBarViewControllerFactory: () -> TabBarViewController

    init(navigation: UINavigationController = UINavigationController(),
         dependency: AppCoordinatorDependencies) {
        self.navigation = navigation
        loginViewControllerFactory = dependency.makeloginViewController
        tabBarViewControllerFactory = dependency.makeTabBarViewController
    }

    func start() {
        let intialViewController = IntialViewController()
        navigation?.pushViewController(intialViewController, animated: true)
    }
}
