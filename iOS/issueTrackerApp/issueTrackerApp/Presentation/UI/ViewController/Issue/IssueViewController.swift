//
//  IssueViewController.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/08.
//

import UIKit

class IssueViewController: UIViewController {

    @IBOutlet weak var issueTableView: UITableView!
    
    let searchController = UISearchController(searchResultsController: nil)
    var filteredIssue: [String] = []
    var isSearchBarEmpty: Bool {
        return searchController.searchBar.text?.isEmpty ?? true
    }
    var isFiltering: Bool {
        return searchController.isActive && !isSearchBarEmpty
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.configureLeftBarButtonItem()
        self.configureRightBarButtonItem()
        self.configureTableView()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        self.configureSearchController()
    }
    
    private func configureLeftBarButtonItem() {
        let customLeftBarButton = CustomBarButtonItem(title: "필터", image: UIImage(systemName: "line.horizontal.3.decrease") ?? UIImage(), located: .left)
        customLeftBarButton.addAction(UIAction.init(handler: { (touch) in
            // todo
        }), for: .touchUpInside)
        let leftBarButtonItem = UIBarButtonItem(customView: customLeftBarButton)
        self.navigationItem.leftBarButtonItem = leftBarButtonItem
    }
    
    private func configureRightBarButtonItem() {
        let customRightBarButton = CustomBarButtonItem(title: "선택", image: UIImage(systemName: "checkmark.circle") ?? UIImage(), located: .right)
        customRightBarButton.addAction(UIAction(handler: { (touch) in
            // todo
        }), for: .touchUpInside)
        let rightBarButtonItem = UIBarButtonItem(customView: customRightBarButton)
        self.navigationItem.rightBarButtonItem = rightBarButtonItem
    }
    
    private func configureSearchController() {
        self.searchController.obscuresBackgroundDuringPresentation = false
        self.searchController.searchBar.placeholder = "Search"
        definesPresentationContext = true
        self.searchController.searchResultsUpdater = self
        navigationItem.searchController = searchController
    }
    
    private func configureTableView() {
        self.issueTableView.register(IssueCell.nib, forCellReuseIdentifier: IssueCell.identifier)
        self.issueTableView.dataSource = self
    }
    
}

extension IssueViewController: UISearchResultsUpdating {
    
    func updateSearchResults(for searchController: UISearchController) {
    }
    
}

extension IssueViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = self.issueTableView.dequeueReusableCell(withIdentifier: IssueCell.identifier) as! IssueCell
        cell.configureAll()
        return cell
    }
    
}
