//
//  IssueListViewController.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/09.
//

import UIKit

class IssueListViewController: UIViewController, ReuseIdentity {

    weak var coordinator: Coordinator?
    
    @IBAction func pushToEditView(_ sender: Any) {
        coordinator?.present(view: .IssueEdit)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationItem.title = "이슈"
    }

}
