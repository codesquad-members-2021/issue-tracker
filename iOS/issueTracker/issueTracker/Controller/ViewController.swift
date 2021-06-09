//
//  ViewController.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/08.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func qwer(_ sender: Any) {
        self.performSegue(withIdentifier: "IssueList", sender: nil)
    }
}

