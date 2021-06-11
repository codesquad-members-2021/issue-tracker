//
//  SettingViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/11.
//

import UIKit

class SettingViewController: UIViewController, MainCoordinated, Networked {
    
    var networkController: NetworkController?
    weak var mainCoordinator: MainFlowCoordinator?

    override func viewDidLoad() {
        super.viewDidLoad()

    }
    
    @IBAction func logoutButtonTapped(_ sender: Any) {
        networkController?.logOut()
        mainCoordinator?.logOut()
    }
}
