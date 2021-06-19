//
//  MilestoneViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class MilestoneViewController: UIViewController {
    
    private lazy var addMileStoneButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "plus", "추가")
        button.addTarget(self, action: #selector(addMileStoneTouched), for: .touchUpInside)
        return button
    }()
    
    private lazy var mileStoneTableView: UITableView = {
        let tableView = UITableView()
        let cellID = MileStoneTableViewCell.reuseID
        tableView.register(MileStoneTableViewCell.self, forCellReuseIdentifier: cellID)
        tableView.backgroundColor = Colors.background
        tableView.allowsSelection = true // 테스트
        tableView.translatesAutoresizingMaskIntoConstraints = false
        return tableView
    }()
    
    @objc private func addMileStoneTouched(_ sender: UIButton) {
        print("마일스톤 추가해줘잉")
    }
    
    private var networkManager: NetworkManagerOperations?
    private var mileStoneTableDatasource: MilestoneTableViewDataSource?
    private var mileStoneTableDelegate: MileStoneTableDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "마일스톤"
        addNavigationButton()
        addTableView()
        
        mileStoneTableDatasource = MilestoneTableViewDataSource()
        mileStoneTableDelegate = MileStoneTableDelegate()
        mileStoneTableView.dataSource = mileStoneTableDatasource
        mileStoneTableView.delegate = mileStoneTableDelegate
        
        setNetworkManager()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        loadData()
    }
    
    private func addNavigationButton() {
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: addMileStoneButton)
    }
    
    private func addTableView() {
        view.addSubview(mileStoneTableView)
        
        NSLayoutConstraint.activate([
            mileStoneTableView.topAnchor.constraint(equalTo: view.topAnchor),
            mileStoneTableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            mileStoneTableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            mileStoneTableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
    
    private func setNetworkManager() {
        let loginInfo = LoginInfo.shared
        guard let jwt = loginInfo.jwt else { return }
//        let url = EndPoint.milestone.fullAddress()
        let headers = [Header.authorization.key(): jwt.description]
//        let requestManager = RequestManager(url: url, headers: headers)
        networkManager = NetworkManager(baseAddress: EndPoint.baseAddress, headers: headers)
    }
    
    func loadData() {
        let mileStoneListEndpoint =
            EndPoint.milestone.path()
        networkManager?.get(endpoint: mileStoneListEndpoint, queryParameters: nil, completion: { [weak self] (result: Result<MileStoneDTO, NetworkError>) in
            switch result {
            case .success(let result):
                guard let mileStone = result.data else { return }
                self?.mileStoneTableDatasource?.update(milestones: mileStone)
                self?.reloadTableView()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    private func presentAlert(with errorMessage: String) {
        DispatchQueue.main.async {
            let alert = AlertFactory.create(body: errorMessage)
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    private func reloadTableView() {
        DispatchQueue.main.async {
            self.mileStoneTableView.reloadData()
        }
    }
}
