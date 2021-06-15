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
    
    private var loginInfo: LoginInfo?
    
    private let colorConverter: HexColorConvertable = HexColorConverter()
    private let colors = ["#558776", "#F3F0D7", "#FFC107", "#FFD8CC", "#CEE5D0", "#231E23"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "레이블"
        addNavigationButton()
        addTableView()
        
        labelTableView.dataSource = self
        labelTableView.delegate = self
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
        return 6
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = LabelTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? LabelTableViewCell ?? LabelTableViewCell()
        let hex = HexColorCode(from: colors[indexPath.row])
        let backgroundColor = colorConverter.convertHex(hex)
        let titleColor = colorConverter.isColorDark(hex: hex) ? UIColor.white : UIColor.black
        cell.configure(with: backgroundColor, titleColor, "졸력", "졸린 오후")
        return cell
    }
}
