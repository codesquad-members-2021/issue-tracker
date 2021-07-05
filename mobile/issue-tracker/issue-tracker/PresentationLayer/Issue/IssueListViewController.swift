//
//  ViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {

    @IBOutlet weak var issueTableView: UITableView!

    var vm = IssuesListViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        vm.fetchIssuesList()
    }

    @IBAction func addIssue(_ sender: UIButton) {
    }

}
