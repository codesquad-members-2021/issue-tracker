//
//  MainTabBarController.swift
//  issue-tracker
//
//  Created by 이다훈 on 2021/06/08.
//

import UIKit

class MainTabBarController: UITabBarController {
    
    var issueCoordinator = IssueCoordinator()
      
    override func viewDidLoad() {
        super.viewDidLoad()
        setChildViewControllers()
    }
    
    func setChildViewControllers() {
        self.viewControllers = [issueCoordinator.navigationController]
    }
}
