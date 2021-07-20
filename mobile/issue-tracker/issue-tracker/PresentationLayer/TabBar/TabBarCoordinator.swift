//
//  TabBarCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/15.
//

import UIKit

final class TabBarCoordinator: Coordinator {
    var navigation: UINavigationController?

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

    func start() {
        let tabBarController = UITabBarController()

        issueListCoordinator.start()
        labelCoordinator.start()
        milestoneCoordinator.start()
        infoCoordinator.start()

        tabBarController.viewControllers = [issueListCoordinator.navigation ?? .init(),
                                            labelCoordinator.navigation ?? .init(),
                                            milestoneCoordinator.navigation ?? .init(),
                                            infoCoordinator.navigation ?? .init()]

        navigation?.setViewControllers([tabBarController], animated: false)
    }
}
