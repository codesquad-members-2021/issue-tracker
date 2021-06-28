//
//  SettingViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/11.
//

import UIKit

class SettingViewController: UIViewController, MainCoordinated, LoginNetworked {
    private var loginNetworkManager: LoginNetworkManager!
    weak var mainCoordinator: MainFlowCoordinator?

    override func viewDidLoad() {
        super.viewDidLoad()

    }
    
    func setLoginNetworkManager(_ loginNetworkManager: LoginNetworkManager) {
        self.loginNetworkManager = loginNetworkManager
    }
    
    @IBAction func logoutButtonTapped(_ sender: Any) {
        loginNetworkManager?.logOut()
        mainCoordinator?.logOut()
    }
}
