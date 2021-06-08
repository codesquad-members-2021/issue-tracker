//
//  IssueViewController.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/08.
//

import UIKit

class IssueViewController: UIViewController {

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

        print("a")
        searchController.obscuresBackgroundDuringPresentation = false
        searchController.searchBar.placeholder = "Search"
        navigationItem.searchController = searchController
        definesPresentationContext = true
        
        searchController.searchResultsUpdater = self
        
    }
    
}

extension IssueViewController: UISearchResultsUpdating {
    
    func updateSearchResults(for searchController: UISearchController) {
    }
    
}
