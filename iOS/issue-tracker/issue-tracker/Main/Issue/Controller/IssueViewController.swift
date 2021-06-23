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
    
    private lazy var addNewIssueButton: UIButton = {
       let button = UIButton()
        button.backgroundColor = Colors.mainGrape
        button.addTarget(self, action: #selector(addNewIssue), for: .touchUpInside)
        button.layer.masksToBounds = true
        button.layer.cornerRadius = 32
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private lazy var plusImageView: UIImageView = {
        let image = UIImage(systemName: "plus")
        let resizeImg = image?.resizedImage(size: CGSize(width: 32, height: 34))?.withRenderingMode(.alwaysTemplate)
        let imageView = UIImageView(image: resizeImg)
        imageView.tintColor = UIColor.white
        imageView.backgroundColor = Colors.mainGrape
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private var networkManager: NetworkManagerOperations?
    private var issueTableDatasource: IssueTableViewDataSource?
    private var issueTableDelegate: IssueTableViewDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "이슈 선택"
        view.backgroundColor = UIColor.white
        
        addTableView()
        addButton()
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
    
    private func addButton() {
        view.addSubview(addNewIssueButton)
        
        NSLayoutConstraint.activate([
            addNewIssueButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            addNewIssueButton.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -90),
            addNewIssueButton.widthAnchor.constraint(equalToConstant: 64),
            addNewIssueButton.heightAnchor.constraint(equalToConstant: 64)
        ])
                
        
        addNewIssueButton.addSubview(plusImageView)
        
        NSLayoutConstraint.activate([
            plusImageView.centerXAnchor.constraint(equalTo: addNewIssueButton.centerXAnchor),
            plusImageView.centerYAnchor.constraint(equalTo: addNewIssueButton.centerYAnchor)
        ])
    }
    
    private func setTableViewSupporters() {
        issueTableDatasource = IssueTableViewDataSource()
        issueTableDelegate = IssueTableViewDelegate(cellActionHandler: swipeActionHandler, cellHeight: 198)
        
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
    
    private func swipeActionHandler(_ index: Int, _ action: CellAction) {
        guard let targetIssue = issueTableDatasource?.issues[index] else { return }
        
        switch action {
        case .delete:
            deleteIssue(for: targetIssue.issueNumber)
        case .close:
            print("close 되어랏")
//            presentEditLabelViewController(for: targetLabel)
        default:
            assert(false)
        }
    }
    
    private func presentAlert(with errorMessage: String) {
        DispatchQueue.main.async {
            let alert = AlertFactory.create(body: errorMessage)
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    @objc func addNewIssue(_ sender: UIButton) {
        print("야호~")
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
    
    private func deleteIssue(for id: Int) {
        let deleteIssueEndpoint = EndPoint.issue.path(with: id)
        networkManager?.delete(endpoint: deleteIssueEndpoint, queryParameters: nil, completion: { [weak self] (result: Result<Void, NetworkError>) in
            switch result {
            case .success(_):
                self?.loadIssues()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
}
    
