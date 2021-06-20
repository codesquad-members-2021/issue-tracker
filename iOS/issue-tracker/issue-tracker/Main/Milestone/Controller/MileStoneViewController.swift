//
//  MilestoneViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class MileStoneViewController: UIViewController {
    
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
        let addMileStoneViewController = MileStoneControlViewController()
        addMileStoneViewController.configure(withTitle: "새로운 마일스톤", currentMileStone: nil)
        addMileStoneViewController.setSaveOperation(postNewMileStone)
        addMileStoneViewController.modalPresentationStyle = .formSheet

        DispatchQueue.main.async {
            self.present(addMileStoneViewController, animated: true, completion: nil)
        }
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
        let headers = [Header.authorization.key(): jwt.description]
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

//MARK: - Network Methods
extension MileStoneViewController {
//    private func deleteMileStone(for id: Int) {
//        let deleteLabelEndpoint = EndPoint.milestone.path(with: id)
//        networkManager?.delete(endpoint: deleteLabelEndpoint, queryParameters: nil, completion: { [weak self] (result: Result<Void, NetworkError>) in
//            switch result {
//            case .success(_):
//                self?.loadData()
//            case .failure(let error):
//                self?.presentAlert(with: error.description)
//            }
//        })
//    }
    
    private func postNewMileStone(_ newMileStone: MileStone) {
        let newLabelEndpoint = EndPoint.milestone.path()
        let requestBody = NewMileStoneDTO(title: newMileStone.title, description: newMileStone.description ?? "", due_date: newMileStone.due_date ?? "")
        
        networkManager?.post(endpoint: newLabelEndpoint, requestBody: requestBody, completion: { [weak self] result in
            switch result {
            case .success(_):
                self?.loadData()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
//    private func putEditedMileStone(_ editedLabel: MileStone) {
//        let labelId = editedLabel.id
//        let editLabelEndpoint = EndPoint.milestone.path(with: labelId)
//        let requestBody = NewLabelDTO(name: editedLabel.title, content: editedLabel.body, colorCode: editedLabel.hexColorCode)
//
//        networkManager?.put(endpoint: editLabelEndpoint, requestBody: requestBody, completion: { [weak self] result in
//            switch result {
//            case .success(_):
//                self?.loadData()
//            case .failure(let error):
//                self?.presentAlert(with: error.description)
//            }
//        })
//    }
}
