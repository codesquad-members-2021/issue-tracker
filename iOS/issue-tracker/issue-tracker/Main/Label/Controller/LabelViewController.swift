//
//  LabelViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

final class LabelViewController: UIViewController {
    
    private lazy var addLabelButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "plus", "추가")
        button.addTarget(self, action: #selector(addLabelTouched), for: .touchUpInside)
        return button
    }()
    
    private lazy var labelTableView: UITableView = {
        let tableView = UITableView()
        let cellID = LabelTableViewCell.reuseID
        tableView.register(LabelTableViewCell.self, forCellReuseIdentifier: cellID)
        tableView.backgroundColor = Colors.background
        tableView.allowsSelection = false
        tableView.translatesAutoresizingMaskIntoConstraints = false
        return tableView
    }()
    
    private let colorConverter: HexColorConvertable = HexColorConverter()
    private var networkManager: NetworkManagerOperations?
    private var labelTableDatasource: LabelTableViewDatasource?
    private var labelTableDelegate: LabelTableDelegate?
    
    private var loginInfo: LoginInfo?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "레이블"
        
        addNavigationButton()
        addTableView()
        
        labelTableDatasource = LabelTableViewDatasource()
        labelTableView.dataSource = labelTableDatasource
        
        labelTableDelegate = LabelTableDelegate()
        labelTableView.delegate = labelTableDelegate
        
        setNetworkManager()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        loadData()
    }
    
    private func addNavigationButton() {
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: addLabelButton)
    }
    
    private func addTableView() {
        view.addSubview(labelTableView)
        
        NSLayoutConstraint.activate([
            labelTableView.topAnchor.constraint(equalTo: view.topAnchor),
            labelTableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            labelTableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            labelTableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
    
    private func setNetworkManager() {
        guard let loginInfo = loginInfo else { return }
        let url = EndPoint.label.fullAddress()
        let headers = [Header.authorization.key(): loginInfo.jwt.description]
        let requestManager = RequestManager(url: url, headers: headers)
        networkManager = NetworkManager(requestManager: requestManager)
    }
    
    func loadData() {
        networkManager?.get(completion: { [weak self] (result: Result<LabelDTO, NetworkError>) in
            switch result {
            case .success(let result):
                guard let labels = result.data else { return }
                self?.labelTableDatasource?.update(labels: labels)
                self?.reloadTableView()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
    private func reloadTableView() {
        DispatchQueue.main.async {
            self.labelTableView.reloadData()
        }
    }
    
    private func presentAlert(with errorMessage: String) {
        DispatchQueue.main.async {
            let alert = AlertFactory.create(body: errorMessage)
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    @objc private func addLabelTouched(_ sender: UIButton) {
        guard let loginInfo = loginInfo else { return }
        let addLabelViewController = AddLabelViewController()
        addLabelViewController.setup(loginInfo: loginInfo)
        addLabelViewController.modalPresentationStyle = .formSheet
        addLabelViewController.setUpDismissOperation { [weak self] in
            self?.loadData()
        }
        present(addLabelViewController, animated: true, completion: nil)
    }
}

extension LabelViewController: LoginInfoContainer {
    func setup(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
}
