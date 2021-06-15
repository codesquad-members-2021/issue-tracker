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
    
    private var loginInfo: LoginInfo?
    private var labels: [Label]?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "레이블"
        
        addNavigationButton()
        addTableView()
        
        labelTableView.dataSource = self
        labelTableView.delegate = self
        
        setNetworkManager()
        loadLabels()
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
    
    private func loadLabels() {
        networkManager?.get(completion: { [weak self] (result: Result<LabelDTO, Error>) in
            switch result {
            case .success(let result):
                let labels = result.data
                self?.labels = labels
                DispatchQueue.main.async {
                    self?.labelTableView.reloadData()
                }
            case .failure(let error):
                print(error)
            }
        })
    }
    
    @objc private func addLabelTouched(_ sender: UIButton) {
        
    }
    
}

extension LabelViewController: LoginInfoContainer {
    func setup(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
}

extension LabelViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return view.frame.height * 0.135
    }
}

extension LabelViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return labels?.count ?? 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = LabelTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? LabelTableViewCell ?? LabelTableViewCell()
        
        guard let labels = labels else { return cell }
        let label = labels[indexPath.row]
        let hex = HexColorCode(from: label.hexColorCode)
        let backgroundColor = colorConverter.convertHex(hex)
        let titleColor = colorConverter.isColorDark(hex: hex) ? UIColor.white : UIColor.black
        cell.configure(with: backgroundColor, titleColor, label.title, label.body)
        return cell
    }
}
