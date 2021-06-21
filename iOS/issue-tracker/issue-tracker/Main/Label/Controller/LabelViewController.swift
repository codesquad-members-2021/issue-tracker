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
    
    private let sceneTitle = "레이블"
    private let colorConverter: HexColorConvertable = HexColorConverter()
    private var networkManager: NetworkManagerOperations?
    private var labelTableDatasource: LabelTableViewDatasource?
    private var labelTableDelegate: LabelTableDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureViews()
        setTableViewSupporters()
        setNetworkManager()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        loadLabels()
    }
    
    private func configureViews() {
        view.backgroundColor = UIColor.white
        title = sceneTitle
        
        addNavigationButton()
        addTableView()
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
    
    private func setTableViewSupporters() {
        labelTableDatasource = LabelTableViewDatasource()
        labelTableView.dataSource = labelTableDatasource
        
        labelTableDelegate = LabelTableDelegate(cellActionHandler: swipeActionHandler)
        labelTableView.delegate = labelTableDelegate
    }
    
    private func setNetworkManager() {
        let loginInfo = LoginInfo.shared
        guard let jwt = loginInfo.jwt else { return }
        let headers = [Header.authorization.key(): jwt.description]
        networkManager = NetworkManager(baseAddress: EndPoint.baseAddress, headers: headers)
    }
    
    private func reloadTableView() {
        DispatchQueue.main.async {
            self.labelTableView.reloadData()
        }
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
    
    private func presentEditLabelViewController(for targetLabel: Label) {
        let editLabelViewController = LabelControlViewController()
        editLabelViewController.configure(withTitle: "레이블 수정하기", currentLabel: targetLabel)
        editLabelViewController.setSaveOperation(putEditedLabel)
        editLabelViewController.modalPresentationStyle = .formSheet
        
        DispatchQueue.main.async {
            self.present(editLabelViewController, animated: true, completion: nil)
        }
    }
    
    private func presentAlert(with errorMessage: String) {
        DispatchQueue.main.async {
            let alert = AlertFactory.create(body: errorMessage)
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    @objc private func addLabelTouched(_ sender: UIButton) {
        let addLabelViewController = LabelControlViewController()
        addLabelViewController.configure(withTitle: "새로운 레이블", currentLabel: nil)
        addLabelViewController.setSaveOperation(postNewLabel)
        addLabelViewController.modalPresentationStyle = .formSheet
 
        DispatchQueue.main.async {
            self.present(addLabelViewController, animated: true, completion: nil)
        }
    }
}

//MARK: - Network Methods
extension LabelViewController {
    private func loadLabels() {
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
    
    private func deleteLabel(for id: Int) {
        let deleteLabelEndpoint = EndPoint.label.path(with: id)
        networkManager?.delete(endpoint: deleteLabelEndpoint, queryParameters: nil, completion: { [weak self] (result: Result<Void, NetworkError>) in
            switch result {
            case .success(_):
                self?.loadLabels()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
    private func postNewLabel(_ newLabel: Label) {
        let newLabelEndpoint = EndPoint.label.path()
        let requestBody = NewLabelDTO(name: newLabel.title, content: newLabel.body, colorCode: newLabel.hexColorCode)
        
        networkManager?.post(endpoint: newLabelEndpoint, requestBody: requestBody, completion: { [weak self] result in
            switch result {
            case .success(_):
                self?.loadLabels()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
    
    private func putEditedLabel(_ editedLabel: Label) {
        let labelId = editedLabel.id
        let editLabelEndpoint = EndPoint.label.path(with: labelId)
        let requestBody = NewLabelDTO(name: editedLabel.title, content: editedLabel.body, colorCode: editedLabel.hexColorCode)
        
        networkManager?.put(endpoint: editLabelEndpoint, requestBody: requestBody, completion: { [weak self] result in
            switch result {
            case .success(_):
                self?.loadLabels()
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
}
