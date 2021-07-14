//
//  TabBarCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/15.
//

import UIKit

protocol TabBarCoordinatorDependencies {
    func makeIssueListCoordinator() -> IssueListCoordinator
}

final class TabBarCoordinator: Coordinator {
    var navigation: UINavigationController?

    private let issueListCoordinatorFactory: () -> IssueListCoordinator

    init(navigation: UINavigationController,
         dependency: TabBarCoordinatorDependencies) {
        self.navigation = navigation
        self.issueListCoordinatorFactory = dependency.makeIssueListCoordinator
    }

    func start() {
        let tabBarController = UITabBarController()
        let issueListCoordinator = issueListCoordinatorFactory()

        issueListCoordinator.start()

        tabBarController.viewControllers = [issueListCoordinator.navigation ?? .init()]
        navigation?.present(tabBarController, animated: true)
    }
}
