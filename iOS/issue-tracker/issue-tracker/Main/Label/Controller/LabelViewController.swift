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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "레이블"
        
        addNavigationButton()
        addTableView()
        
        labelTableDatasource = LabelTableViewDatasource()
        labelTableView.dataSource = labelTableDatasource
        
        labelTableDelegate = LabelTableDelegate(cellActionHandler: swipeActionHandler)
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
    
    private func swipeActionHandler(_ index: Int, _ action: CellAction) {
        guard let targetLabel = labelTableDatasource?.labels[index] else { return }
        
        switch action {
        case .delete:
            deleteLabel(for: targetLabel.id)
        case .edit:
            presentEditLabelViewController(for: targetLabel)
        default:
            assert(false)
        }
    }
    
    private func deleteLabel(for id: Int) {
        let deleteLabelEndpoint = EndPoint.label.path(with: id)
        networkManager?.delete(endpoint: deleteLabelEndpoint, queryParameters: nil, completion: { [weak self] (result: Result<Void, NetworkError>) in
            switch result {
            case .success(_):
                self?.loadData()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
    private func presentEditLabelViewController(for targetLabel: Label) {
        let editLabelViewController = EditLabelViewController()
        editLabelViewController.setSceneTitle(title: "레이블 수정하기")
        editLabelViewController.setLabelToEdit(label: targetLabel)
        editLabelViewController.modalPresentationStyle = .formSheet
        editLabelViewController.setUpDismissOperation { [weak self] in
            self?.loadData()
        }
        
        DispatchQueue.main.async {
            self.present(editLabelViewController, animated: true, completion: nil)
        }
    }
    
    private func setNetworkManager() {
        let loginInfo = LoginInfo.shared
        guard let jwt = loginInfo.jwt else { return }
        let headers = [Header.authorization.key(): jwt.description]
        networkManager = NetworkManager(baseAddress: EndPoint.baseAddress, headers: headers)
    }
    
    func loadData() {
        let labelListEndpoint = EndPoint.label.path()
        networkManager?.get(endpoint: labelListEndpoint, queryParameters: nil,
                            completion: { [weak self] (result: Result<LabelDTO, NetworkError>) in
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
        let addLabelViewController = AddLabelViewController()
        addLabelViewController.setSceneTitle(title: "새로운 레이블")
        addLabelViewController.modalPresentationStyle = .formSheet
        addLabelViewController.setUpDismissOperation { [weak self] in
            self?.loadData()
        }
        
        DispatchQueue.main.async {
            self.present(addLabelViewController, animated: true, completion: nil)
        }
    }
}

