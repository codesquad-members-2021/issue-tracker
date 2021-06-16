//
//  IssueViewController.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/08.
//

import UIKit

class IssueViewController: UIViewController, IssueViewModelType, MainCoordinated {

    @IBOutlet weak var issueTableView: UITableView!
    
    var issueViewModel: IssueViewModel?
    var mainCoordinator: MainFlowCoordinator?
    let searchController = UISearchController(searchResultsController: nil)
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
        self.issueViewModel?.fetchAllIssue()
        self.configureNotificationCenter()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        self.configureSearchController()
    }
    
    private func configureNotificationCenter() {
        NotificationCenter.default.addObserver(self, selector: #selector(onDidReceiveIssueData), name: .didReceiveIssueData, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(onDidFilterIssueData), name: .didFilterIssueData, object: nil)
    }
    
    @objc func onDidFilterIssueData() {
        self.issueTableView.reloadData()
    }
    
    @objc func onDidReceiveIssueData() {
        self.issueTableView.reloadData()
    }
    
    private func configureLeftBarButtonItem() {
        let customLeftBarButton = CustomBarButtonItem(title: "필터", image: UIImage(systemName: "line.horizontal.3.decrease") ?? UIImage(), located: .left)
        customLeftBarButton.addAction(UIAction.init(handler: { (touch) in
            // to do
        }), for: .touchUpInside)
        let leftBarButtonItem = UIBarButtonItem(customView: customLeftBarButton)
        self.navigationItem.leftBarButtonItem = leftBarButtonItem
    }
    
    private func configureRightBarButtonItem() {
        let customRightBarButton = CustomBarButtonItem(title: "선택", image: UIImage(systemName: "checkmark.circle") ?? UIImage(), located: .right)
        customRightBarButton.addAction(UIAction(handler: { [weak self] (touch) in
            
            guard let self = self else { return }
            let targetVC = self.storyboard?.instantiateViewController(identifier: "IssueSelectTableViewController") as! IssueSelectTableViewController
            self.mainCoordinator?.configure(viewController: targetVC)
            self.navigationController?.pushViewController(targetVC, animated: true)
            
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
        self.issueTableView.delegate = self
    }
}

extension IssueViewController: UISearchResultsUpdating {
    
    func updateSearchResults(for searchController: UISearchController) {
        let searchBar = searchController.searchBar
        issueViewModel?.filterIssuesWithSearchText(searchBar.text!)
    }
}

extension IssueViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {

        if isFiltering {
            guard let filteredIssue = issueViewModel?.filteredIssues else { return 0 }
            return filteredIssue.count
        }
        guard let issues = issueViewModel?.issues else { return 0 }
        return issues.count
        
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = self.issueTableView.dequeueReusableCell(withIdentifier: IssueCell.identifier) as! IssueCell
    
        if isFiltering {
            guard let filteredIssues = issueViewModel?.filteredIssues else { return cell }
            cell.configureAll(with: filteredIssues[indexPath.row])
        } else {
            guard let issues = issueViewModel?.issues else { return cell }
            cell.configureAll(with: issues[indexPath.row])
        }
        
        return cell
    }
    
}

extension IssueViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView,
                       trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        // delete action
        let delete = UIContextualAction(style: .destructive,
                                        title: "삭제") { [weak self] (action, view, completionHandler) in
            self?.issueViewModel?.deleteIssue(at: indexPath.row, completionHandler: {
                    completionHandler(true)
            })
        }
        delete.backgroundColor = .systemRed
        delete.image = UIImage(systemName: "trash")

        // close action
        let close = UIContextualAction(style: .normal,
                                        title: "닫기") { [weak self] (action, view, completionHandler) in
        // todo
                                        completionHandler(true)
        }
        close.backgroundColor = UIColor.hexString2UIColor(hexString: "#CCD4FF")
        close.image = UIImage(systemName: "archivebox")
        
        let configuration = UISwipeActionsConfiguration(actions: [close, delete])
        return configuration
    }
}
