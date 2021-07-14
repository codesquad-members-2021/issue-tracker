//
//  TabBarViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class TabBarViewController: UITabBarController, StoryBoarded {

    private let issueCoordinator: Coordinator
    private let labelCoordinator: Coordinator
    private let milestoneCoordinator: Coordinator
    private let infoCoordinator: Coordinator

    init?(coder: NSCoder,
          issueCoordinator: Coordinator,
          labelCoordinator: Coordinator = LabelCoordinator(),
          milestoneCoordinator: Coordinator = MilestoneCoordinator(),
          infoCoordinator: Coordinator = InfoCoordinator()) {

        self.issueCoordinator = issueCoordinator
        self.labelCoordinator = labelCoordinator
        self.milestoneCoordinator = milestoneCoordinator
        self.infoCoordinator = infoCoordinator
        super.init(coder: coder)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureTabBar()

        issueCoordinator.start()
        labelCoordinator.start()
        milestoneCoordinator.start()
        infoCoordinator.start()
    }

    private func configureTabBar() {
        self.viewControllers = [issueCoordinator.navigation ?? .init(),
                                labelCoordinator.navigation ?? .init(),
                                milestoneCoordinator.navigation ?? .init(),
                                infoCoordinator.navigation ?? .init()]
    }
}
