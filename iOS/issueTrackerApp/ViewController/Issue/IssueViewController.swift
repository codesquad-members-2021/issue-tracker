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
        
        searchController.obscuresBackgroundDuringPresentation = false
        searchController.searchBar.placeholder = "Search"
        definesPresentationContext = true
//        navigationItem.searchController = searchController
        searchController.searchResultsUpdater = self
        
        print("aa")
        configureTableView()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
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
        cell.configure()
        return cell
    }
    
}
