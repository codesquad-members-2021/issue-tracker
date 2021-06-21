//
//  IssueViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class IssueViewController: UIViewController {
    
    private var issueTableDatasource: IssueTableViewDataSource?
    private var issueTableDelegate: IssueTableViewDelegate?
    
    private lazy var issueTableView: UITableView = {
        let tableView = UITableView()
        let cellID = IssueTableViewCell.reuseID
        tableView.register(IssueTableViewCell.self, forCellReuseIdentifier: cellID)
        tableView.backgroundColor = Colors.background
        tableView.translatesAutoresizingMaskIntoConstraints = false
        return tableView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "이슈 선택"
        view.backgroundColor = UIColor.white
        
        addTableView()
        setTableViewSupporters()
    }
    
    private func addTableView() {
        view.addSubview(issueTableView)
        
        NSLayoutConstraint.activate([
            issueTableView.topAnchor.constraint(equalTo: view.topAnchor),
            issueTableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            issueTableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            issueTableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
    
    private func setTableViewSupporters() {
        issueTableDatasource = IssueTableViewDataSource()
        issueTableDelegate = IssueTableViewDelegate()
        
        issueTableView.delegate = issueTableDelegate
        issueTableView.dataSource = issueTableDatasource
    }

}
