//
//  IssueSelectTableViewController.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/15.
//

import UIKit

class IssueSelectTableViewController: UITableViewController {
    
    var issues: [Issue] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.configureTableView()
        self.configureBackBarButtonItem()
        self.configureRightBarButtonItem()
    }

    public func prepare(with issues: [Issue]) {
        self.issues = issues
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
        return self.issues.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        guard let cell = self.tableView.dequeueReusableCell(withIdentifier: IssueCell.identifier) as? IssueCell else { return UITableViewCell() }
        cell.configureAll(with: issues[indexPath.row])
        
        return cell
    }

}
