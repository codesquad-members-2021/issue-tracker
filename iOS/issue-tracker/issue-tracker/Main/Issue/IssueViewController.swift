//
//  IssueViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class IssueViewController: UIViewController {
    
    private var loginInfo: LoginInfo?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.red
    }
    
}

extension IssueViewController: LoginInfoContainer {
    func setup(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
}
