//
//  IssueViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class IssueViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.red
        title = "이슈 선택"
        //임시 전환
        presentNext()
    }
    
    private func presentNext() {
        let nextViewController = IssueControlViewController()
        nextViewController.setSaveOperation(tempSaveOperation)
        navigationController?.pushViewController(nextViewController, animated: false)
    }
    
    private func tempSaveOperation(_ issue: Issue) {
        print("새 issue 저장!")
    }

}
