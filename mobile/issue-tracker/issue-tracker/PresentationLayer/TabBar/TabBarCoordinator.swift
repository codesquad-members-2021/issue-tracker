//
//  TabBarCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/15.
//

import UIKit

final class TabBarCoordinator: Coordinator {
    var navigation: UINavigationController

    struct Dependency {
        let issueListCoordinatorFactory: () -> IssueListCoordinator
        let labelCoordinatorFactory: () -> LabelCoordinator
        let milestoneCoordinatorFactory: () -> MilestoneCoordinator
        let infoCoordinatorFactory: () -> InfoCoordinator
    }

    let issueListCoordinator: IssueListCoordinator
    let labelCoordinator: LabelCoordinator
    let milestoneCoordinator: MilestoneCoordinator
    let infoCoordinator: InfoCoordinator

    init(navigation: UINavigationController,
         dependency: Dependency) {
        self.navigation = navigation
        self.issueListCoordinator = dependency.issueListCoordinatorFactory()
        self.labelCoordinator = dependency.labelCoordinatorFactory()
        self.milestoneCoordinator = dependency.milestoneCoordinatorFactory()
        self.infoCoordinator = dependency.infoCoordinatorFactory()
    }

    func loadInitalView() {
        let tabBarController = UITabBarController()

        issueListCoordinator.loadInitalView()
        labelCoordinator.loadInitalView()
        milestoneCoordinator.loadInitalView()
        infoCoordinator.loadInitalView()

        tabBarController.viewControllers = [issueListCoordinator.navigation,
                                            labelCoordinator.navigation,
                                            milestoneCoordinator.navigation,
                                            infoCoordinator.navigation]

        navigation.setViewControllers([tabBarController], animated: false)
    }
}
