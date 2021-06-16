//
//  ViewController.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/08.
//

import UIKit

class LoginViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

    }

    @IBAction func segueNextViewController(_ sender: Any) {
        self.performSegue(withIdentifier: "IssueList", sender: nil)
    }
    
    @IBAction func didTapGitHubLogin(_ sender: Any) {
        self.excuteOAuth(service: .gitHub)
    }
}
