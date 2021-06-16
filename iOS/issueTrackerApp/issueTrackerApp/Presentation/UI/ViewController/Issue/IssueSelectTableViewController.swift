//
//  IssueSelectTableViewController.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/15.
//

import UIKit

class IssueSelectTableViewController: UITableViewController, IssueViewModelType, MainCoordinated {
   
    private var issueViewModel: IssueViewModel!
    var mainCoordinator: MainFlowCoordinator?
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.configureTableView()
        self.configureBackBarButtonItem()
        self.configureRightBarButtonItem()
    }
    
    func setIssueViewModel(_ issueViewModel: IssueViewModel) {
        self.issueViewModel = issueViewModel
    }
    
    private func configureTableView() {
        self.tableView.register(IssueCell.nib, forCellReuseIdentifier: IssueCell.identifier)
        self.tableView.allowsMultipleSelection = true
    }
    
    private func configureBackBarButtonItem() {
        self.navigationItem.hidesBackButton = true
    }
    
    private func configureRightBarButtonItem() {
        let rightBarButtonItem = UIBarButtonItem(title: "취소", image: nil, primaryAction: UIAction.init(handler: { (touch) in
            self.navigationController?.popViewController(animated: true)
        }), menu: nil)
        
        self.navigationItem.rightBarButtonItem = rightBarButtonItem
    }
    
    // MARK: - Table view data source
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return issueViewModel?.issues.count ?? 0
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        guard let cell = self.tableView.dequeueReusableCell(withIdentifier: IssueCell.identifier) as? IssueCell else { return UITableViewCell() }
        guard let issue = issueViewModel?.issues[indexPath.row] else { return UITableViewCell() }
        cell.configureAll(with: issue)
        
        return cell
    }

}
