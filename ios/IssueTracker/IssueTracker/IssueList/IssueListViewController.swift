//
//  IssueListViewController.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {

    static let reuseIdentifier = "IssueListViewController"
    
    @IBOutlet weak var issueNumLabel: UILabel!
    @IBOutlet weak var searchBar: UISearchBar!
    @IBOutlet weak var issueTableView: UITableView!
    @IBOutlet weak var filterButton: UIButton!
    @IBOutlet weak var EditButton: UIButton!
    @IBOutlet weak var plusButton: UIButton!
    
    private var dataSource: IssueDataSource!
    
    init(dataSource: IssueDataSource = IssueDataSource()) {
        self.dataSource = dataSource
        super.init(nibName: IssueListViewController.reuseIdentifier, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setting()
    }
    
}


extension IssueListViewController: UITableViewDelegate {
    
    func setDataSource(with dataSource: IssueDataSource) {
        self.dataSource = dataSource
    }
    
    private func setting() {
        issueTableView.dataSource = dataSource
        issueTableView.delegate = self
        issueTableView.register(UINib(nibName: IssueCell.reuseIdentifier, bundle: nil), forCellReuseIdentifier: IssueCell.reuseIdentifier)
    }
}
