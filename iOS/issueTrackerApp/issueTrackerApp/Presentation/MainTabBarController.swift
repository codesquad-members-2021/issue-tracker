//
//  MainTabBarController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import UIKit

class MainTabBarController: UITabBarController, MainCoordinated, LoginNetworked, LoginCoordinated {
    private var loginNetworkManager: LoginNetworkManager!
    weak var mainCoordinator: MainFlowCoordinator?
    weak var loginCoordinator: LoginFlowCoordinator?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        guard (loginNetworkManager?.isClientAuthenticated ?? false) else {
            loginCoordinator?.mainViewControllerRequiresAuthentication(self, isAppLaunch: true)
            return
        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        loginCoordinator?.configure(viewController: segue.destination)
    }
    
    func setLoginNetworkManager(_ loginNetworkManager: LoginNetworkManager) {
        self.loginNetworkManager = loginNetworkManager
    }
}
