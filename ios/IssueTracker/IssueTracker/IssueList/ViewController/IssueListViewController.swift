//
//  IssueListViewController.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {
    
    @IBOutlet private weak var issueNumLabel: UILabel!
    @IBOutlet private weak var searchBar: UISearchBar!
    @IBOutlet private weak var issueTableView: UITableView!
    @IBOutlet private weak var filterButton: UIButton!
    @IBOutlet private weak var EditButton: UIButton!
    @IBOutlet private weak var plusButton: UIButton!
    
    private var viewModel: IssueViewModel!
    private var dataSource: IssueDataSource!
    private var tableViewDelegate: IssueTableDelegate!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setViewModel(with: IssueListMock.data)
        setting()
    }
    
}


extension IssueListViewController: UITableViewDelegate {
    
    func setViewModel(with issues: [Issue]) {
        viewModel = IssueViewModel(issues: issues)
        dataSource = IssueDataSource(viewModel: viewModel)
        tableViewDelegate = IssueTableDelegate(viewModel: viewModel)
    }
    
    private func setting() {
        issueTableView.dataSource = dataSource
        issueTableView.delegate = tableViewDelegate
        issueTableView.register(UINib(nibName: IssueCell.reuseIdentifier, bundle: nil), forCellReuseIdentifier: IssueCell.reuseIdentifier)
    }
    
}
