//
//  IssueViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class IssueViewController: UIViewController {
    
    private lazy var issueTableView: UITableView = {
        let tableView = UITableView()
        let cellID = IssueTableViewCell.reuseID
        tableView.register(IssueTableViewCell.self, forCellReuseIdentifier: cellID)
        tableView.backgroundColor = Colors.background
        tableView.translatesAutoresizingMaskIntoConstraints = false
        return tableView
    }()
    
    private var networkManager: NetworkManagerOperations?
    private var issueTableDatasource: IssueTableViewDataSource?
    private var issueTableDelegate: IssueTableViewDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "이슈 선택"
        view.backgroundColor = UIColor.white
        
        addTableView()
        setTableViewSupporters()
        setNetworkManager()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        loadIssues()        
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

    private func setNetworkManager() {
        let loginInfo = LoginInfo.shared
        guard let jwt = loginInfo.jwt else { return }
        let headers = [Header.authorization.key(): jwt.description]
        networkManager = NetworkManager(baseAddress: EndPoint.baseAddress, headers: headers)
    }
    
    private func reloadTableView() {
        DispatchQueue.main.async {
            self.issueTableView.reloadData()
        }
    }
    
    private func presentAlert(with errorMessage: String) {
        DispatchQueue.main.async {
            let alert = AlertFactory.create(body: errorMessage)
            self.present(alert, animated: true, completion: nil)
        }
    }
}

//MARK: - Network Methods
extension IssueViewController {
    private func loadIssues() {
        let issueListEndpoint = EndPoint.issue.path()
        networkManager?.get(endpoint: issueListEndpoint, queryParameters: nil,
                            completion: { [weak self] (result: Result<IssueDTO, NetworkError>) in
            switch result {
            case .success(let result):
                guard let issues = result.data else { return }
                self?.issueTableDatasource?.update(issues: issues)
                self?.reloadTableView()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
}
    
