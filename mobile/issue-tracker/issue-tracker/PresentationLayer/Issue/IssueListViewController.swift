//
//  ViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {

    private var issueViewModel: IssueListProvider

    init?(coder: NSCoder, issueViewModel: IssueListProvider) {
        self.issueViewModel = issueViewModel
        super.init(coder: coder)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    @IBOutlet weak var issueTableView: UITableView!

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    func fetchIssueList(issues: [Issue]) {
    }

    func showError(from error: NetworkError) {
        DispatchQueue.main.async {
            let alertController = UIAlertController(title: error.description)
            self.present(alertController, animated: true)
        }
    }

    @IBAction func addIssue(_ sender: UIButton) {
    }

}
