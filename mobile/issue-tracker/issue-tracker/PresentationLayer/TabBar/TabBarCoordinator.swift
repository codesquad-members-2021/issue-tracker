//
//  TabBarCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/15.
//

import UIKit

protocol TabBarCoordinatorDependencies {
    func makeIssueListCoordinator() -> IssueListCoordinator
    func makeLabelCoordinator() -> LabelCoordinator
    func makeMilestoneCoordinator() -> MilestoneCoordinator
    func makeInfoCoordinator() -> InfoCoordinator
}

final class TabBarCoordinator: Coordinator {
    var navigation: UINavigationController?

    private let issueListCoordinatorFactory: () -> IssueListCoordinator
    private let labelCoordinatorFactory: () -> LabelCoordinator
    private let milestoneCoordinatorFactory: () -> MilestoneCoordinator
    private let infoCoordinatorFactory: () -> InfoCoordinator

    init(navigation: UINavigationController,
         dependency: TabBarCoordinatorDependencies) {
        self.navigation = navigation
        self.issueListCoordinatorFactory = dependency.makeIssueListCoordinator
        self.labelCoordinatorFactory = dependency.makeLabelCoordinator
        self.milestoneCoordinatorFactory = dependency.makeMilestoneCoordinator
        self.infoCoordinatorFactory = dependency.makeInfoCoordinator
    }

    func start() {
        let tabBarController = UITabBarController()

        let issueListCoordinator = issueListCoordinatorFactory()
        let lableCoordinator = labelCoordinatorFactory()
        let milestoneCoordinator = milestoneCoordinatorFactory()
        let infoCoordinator = infoCoordinatorFactory()

        issueListCoordinator.start()
        lableCoordinator.start()
        milestoneCoordinator.start()
        infoCoordinator.start()

        tabBarController.viewControllers = [issueListCoordinator.navigation ?? .init(),
                                            lableCoordinator.navigation ?? .init(),
                                            milestoneCoordinator.navigation ?? .init(),
                                            infoCoordinator.navigation ?? .init()]

        navigation?.setViewControllers([tabBarController], animated: false)
    }
}
