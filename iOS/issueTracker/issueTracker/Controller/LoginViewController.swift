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
        self.excuteOAuth(service: .gitHub) { _ in
          
            let storyboard = UIStoryboard(name: "IssueList", bundle: nil)

            let initialViewController = storyboard.instantiateViewController(withIdentifier: "IssueList")
            // 키체인에서 가져온 user를 컨트롤러로 넘겨줌
            // initialViewController?.getUser(user!)
            initialViewController.modalPresentationStyle = .fullScreen
            initialViewController.modalTransitionStyle = .crossDissolve
            self.present(initialViewController, animated: true, completion: nil)
        }
    }
}
