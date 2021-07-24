//
//  issueListCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/12.
//

import UIKit

protocol IssueListCoordinatorDependencies {
    func makeIssueListViewController() -> IssueListViewController
}

 final class IssueListCoordinator: Coordinator {

    var navigation: UINavigationController

    private let issueListViewControllerFactory: () -> IssueListViewController

    init(navigation: UINavigationController = NavigationController(),
         dependency: IssueListCoordinatorDependencies) {
        self.navigation = navigation
        self.issueListViewControllerFactory = dependency.makeIssueListViewController
    }

    func loadInitalView() {
        let issueListViewController = issueListViewControllerFactory()

        navigation.tabBarItem = UITabBarItem(type: .issue)
        navigation.pushViewController(issueListViewController, animated: true)
    }
 }
