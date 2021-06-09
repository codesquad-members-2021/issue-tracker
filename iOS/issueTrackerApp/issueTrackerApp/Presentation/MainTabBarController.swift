//
//  MainTabBarController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import UIKit

class MainTabBarController: UITabBarController, Networked, MainCoordinated, LoginCoordinated {
    var networkController: NetworkController?
    weak var mainCoordinator: MainFlowCoordinator?
    weak var loginCoordinator: LoginFlowCoordinator?
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        if (!networkController!.isClientAuthenticated) {
            loginCoordinator?.mainViewControllerRequiresAuthentication(self, isAppLaunch: true)
        }
    }
}
