//
//  MilestoneCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/13.
//

import UIKit

final class MilestoneCoordinator: Coordinator {

    var navigation: UINavigationController

    init(navigation: UINavigationController = NavigationController()) {
        self.navigation = navigation
    }

    func loadInitalView() {
        navigation.tabBarItem = UITabBarItem(type: .milestone)
    }
}
