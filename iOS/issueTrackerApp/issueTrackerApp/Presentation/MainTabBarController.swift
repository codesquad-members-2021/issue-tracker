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
        guard (networkController?.isClientAuthenticated ?? true) else {
            loginCoordinator?.mainViewControllerRequiresAuthentication(self, isAppLaunch: true)
            return
        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        loginCoordinator?.configure(viewController: segue.destination)
    }
}
