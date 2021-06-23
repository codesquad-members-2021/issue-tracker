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
    private var mileStoneTableDelegate: CommonTableDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "마일스톤"
        addNavigationButton()
        addTableView()
        setTableViewSupporters()
        setNetworkManager()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        loadMileStones()
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
    
    private func setTableViewSupporters() {
        mileStoneTableDatasource = MilestoneTableViewDataSource()
        mileStoneTableView.dataSource = mileStoneTableDatasource
        
        mileStoneTableDelegate = CommonTableDelegate(cellActionHandler: swipeActionHandler, cellHeight: 198)
        mileStoneTableView.delegate = mileStoneTableDelegate
    }
    
    private func setNetworkManager() {
        let loginInfo = LoginInfo.shared
        guard let jwt = loginInfo.jwt else { return }
        let headers = [Header.authorization.key(): jwt.description]
        networkManager = NetworkManager(baseAddress: EndPoint.baseAddress, headers: headers)
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
    private func swipeActionHandler(_ index: Int, _ action: CellAction) {
        guard let targetMileStone = mileStoneTableDatasource?.milestones[index] else { return }
        
        switch action {
        case .edit:
            presentEditMileStoneViewController(for: targetMileStone)
        case .delete:
            deleteMileStone(for: targetMileStone.id)        
        default:
            assert(false)
        }
    }
    
    private func presentEditMileStoneViewController(for targetMileStone: MileStone) {
        let editMileStoneViewController = MileStoneControlViewController()
        editMileStoneViewController.configure(withTitle: "마일스톤 수정하기", currentMileStone: targetMileStone)
        editMileStoneViewController.setSaveOperation(putEditedMileStone)
        editMileStoneViewController.modalPresentationStyle = .formSheet
        
        DispatchQueue.main.async {
            self.present(editMileStoneViewController, animated: true, completion: nil)
        }
    }
}

//MARK: - Network Methods
extension MileStoneViewController {
    private func loadMileStones() {
        let mileStoneListEndpoint =
            EndPoint.milestone.path()
        networkManager?.get(endpoint: mileStoneListEndpoint, queryParameters: nil, completion: { [weak self] (result: Result<CommonDTO<MileStone>, NetworkError>) in
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
    
    private func deleteMileStone(for id: Int) {
        let deleteMileStoneEndpoint = EndPoint.milestone.path(with: id)
        networkManager?.delete(endpoint: deleteMileStoneEndpoint, queryParameters: nil, completion: { [weak self] (result: Result<Void, NetworkError>) in
            switch result {
            case .success(_):
                self?.loadMileStones()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
    private func postNewMileStone(_ newMileStone: MileStone) {
        let newMileStoneEndpoint = EndPoint.milestone.path()
        let requestBody = NewMileStoneDTO(title: newMileStone.title, description: newMileStone.description ?? "", dueDate: newMileStone.dueDate ?? "")
        
        networkManager?.post(endpoint: newMileStoneEndpoint, requestBody: requestBody, completion: { [weak self] result in
            switch result {
            case .success(_):
                self?.loadMileStones()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
    private func putEditedMileStone(_ editedMileStone: MileStone) {
        let mileStoneId = editedMileStone.id
        let editMileStoneEndpoint = EndPoint.milestone.path(with: mileStoneId)
        let requestBody = NewMileStoneDTO(title: editedMileStone.title, description: editedMileStone.description ?? "", dueDate: editedMileStone.dueDate ?? "")

        networkManager?.put(endpoint: editMileStoneEndpoint, requestBody: requestBody, completion: { [weak self] result in
            switch result {
            case .success(_):
                self?.loadMileStones()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
}
