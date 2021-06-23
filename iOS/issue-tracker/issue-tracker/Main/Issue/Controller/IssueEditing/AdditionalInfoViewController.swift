//
//  AdditionalInfoViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class AdditionalInfoViewController<InfoCell: UITableViewCell,
                                         Info: Decodable & Identifiable>: UIViewController {

    private lazy var topMenuView: TopMenuView = {
        let topMenuView = TopMenuView()
        topMenuView.configure(withTitle: sceneTitle, rightButton: saveButton, leftButton: cancelButton)
        topMenuView.translatesAutoresizingMaskIntoConstraints = false
        return topMenuView
    }()
    
    private lazy var saveButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "", "저장")
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(saveButtonTouched), for: .touchUpInside)
        changeSaveButtonEnableStatus()
        return button
    }()
    
    private lazy var cancelButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "chevron.backward", "취소")
        button.moveImageToLeft()
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(cancelButtonTouched), for: .touchUpInside)
        return button
    }()
    
    private lazy var infoListTable: UITableView = {
        let tableView = UITableView()
        let cellID = InfoCell.reuseID
        tableView.register(InfoCell.self, forCellReuseIdentifier: cellID)
        tableView.tintColor = Colors.mainGrape
        tableView.translatesAutoresizingMaskIntoConstraints = false
        tableView.dataSource = tableDatasource
        return tableView
    }()
    
    private lazy var singleLineHeight: CGFloat = {
        return view.frame.height * 0.05
    }()
    
    private lazy var spacing: CGFloat = {
        return singleLineHeight * 0.5
    }()
    
    private var sceneTitle: String?
    private var infoCell: InfoCell?
    private var tableDatasource: SimpleInfoTableDatasource?
    private var tableDelegate: SimpleInfoTableDelegate?
    
    private var selectedInfo = [Info]()
    private var saveOperation: (([Info]) -> Void)?
    private var endpoint: EndPoint?
    private var networkManager: NetworkManagerOperations?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        loadData()
    }
    
    private func configureView() {
        view.backgroundColor = .white
        
        addTopMenu()
        addTableView()
    }
    
    private func addTopMenu() {
        view.addSubview(topMenuView)
        
        NSLayoutConstraint.activate([
            topMenuView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            topMenuView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            topMenuView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: spacing),
            topMenuView.heightAnchor.constraint(equalToConstant: singleLineHeight)
        ])
    }
    
    private func addTableView() {
        view.addSubview(infoListTable)
        
        NSLayoutConstraint.activate([
            infoListTable.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            infoListTable.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            infoListTable.topAnchor.constraint(equalTo: topMenuView.bottomAnchor, constant: spacing),
            infoListTable.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        ])
    }
    
    func configure(withTitle sceneTitle: String, preSelectedInfos: [Info], tableDatasource: SimpleInfoTableDatasource, isMultiselectionAllowed: Bool, endpoint: EndPoint) {
        self.sceneTitle = sceneTitle
        self.selectedInfo = preSelectedInfos
        self.tableDatasource = tableDatasource
        self.endpoint = endpoint
        
        DispatchQueue.main.async {
            self.infoListTable.allowsMultipleSelection = isMultiselectionAllowed
        }
        
        setUpTableViewSupporter()
        setUpNetworkManager()
    }
    
    private func setUpTableViewSupporter() {
        self.tableDelegate = CellSelectionTableDelegate()
        tableDelegate?.setCellSelectionHandler(updateSelection)
        infoListTable.delegate = tableDelegate
    }
    
    private func updateSelection(index: Int, selectionStatus: CellSelection) {
        guard let tableDatasource = tableDatasource,
              let targetInfo = tableDatasource.info(for: index) as? Info else { return }
        
        switch selectionStatus {
        case .selected:
            selectedInfo.append(targetInfo)
        case .deSelected:
            var targetIndex: Int?
            selectedInfo.enumerated().forEach { (index, info) in
                if info.identifier() == targetInfo.identifier() {
                    targetIndex = index
                }
            }
            guard let targetIndex = targetIndex else { return }
            selectedInfo.remove(at: targetIndex)
        }
        changeSaveButtonEnableStatus()
    }
    
    private func setUpNetworkManager() {
        let loginInfo = LoginInfo.shared
        guard let jwt = loginInfo.jwt else { return }
        let headers = [Header.authorization.key(): jwt.description]
        let networkManager = NetworkManager(baseAddress: EndPoint.baseAddress, headers: headers)
        self.networkManager = networkManager
    }

    func setSaveOperation(_ operation: @escaping ([Info]) -> Void) {
        self.saveOperation = operation
    }
    
    private func changeSaveButtonEnableStatus() {
        DispatchQueue.main.async {
            self.saveButton.isEnabled = !self.selectedInfo.isEmpty
        }
    }
    
    private func reloadTableView() {
        DispatchQueue.main.async {
            self.infoListTable.reloadData()
            self.setUpCurrentLabelInfo()
        }
    }
    
    private func setUpCurrentLabelInfo() {
        guard let tableDatasource = tableDatasource else { return }
        let selectedIndexs = selectedInfo.compactMap{ tableDatasource.index(for: $0) }
        selectedIndexs.forEach { selectedIndex in
            let indexPath = IndexPath(row: selectedIndex, section: 0)
            
            DispatchQueue.main.async {
                self.infoListTable.selectRow(at: indexPath, animated: false, scrollPosition: .top)
            }
        }
    }
    
    @objc private func saveButtonTouched(_ sender: UIButton) {
        guard let saveOperation = saveOperation else { return }
        saveOperation(selectedInfo)
        dismiss(animated: true, completion: nil)
    }
    
    @objc private func cancelButtonTouched(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
}

extension AdditionalInfoViewController {
    func loadData() {
        guard let networkManager = networkManager,
              let endpoint = endpoint,
              let tableDatasource = tableDatasource else { return }
        
        networkManager.get(endpoint: endpoint.path(), queryParameters: nil) { [weak self] (result: Result<CommonDTO<Info>, NetworkError>) in
            switch result {
            case .success(let result):
                guard let infos = result.data else { return }
                tableDatasource.update(with: infos)
                self?.reloadTableView()
            case .failure(let error):
                print("\(error)")
                //self?.presentAlert(with: error.description)
            }
        }
    }
}
