//
//  IssueListViewController.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {
    
    @IBOutlet weak var issueNumLabel: UILabel!
    @IBOutlet weak var searchBar: UISearchBar!
    @IBOutlet weak var issueTableView: UITableView!
    @IBOutlet weak var filterButton: UIButton!
    @IBOutlet weak var EditButton: UIButton!
    @IBOutlet weak var plusButton: UIButton!
    
    private var dataSource: IssueDataSource!
    private lazy var tableViewDelegate = IssueTableDelegate()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setDataSource(with: IssueDataSource(issues: IssueListMock.data))
        setting()
    }
    
}


extension IssueListViewController: UITableViewDelegate {
    
    func setDataSource(with dataSource: IssueDataSource) {
        self.dataSource = dataSource
    }
    
    private func setting() {
        issueTableView.dataSource = dataSource
        issueTableView.delegate = tableViewDelegate
        issueTableView.register(UINib(nibName: IssueCell.reuseIdentifier, bundle: nil), forCellReuseIdentifier: IssueCell.reuseIdentifier)
    }
    
}
