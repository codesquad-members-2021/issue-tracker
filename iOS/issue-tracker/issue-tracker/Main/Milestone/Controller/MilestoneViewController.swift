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
    
    private var loginInfo: LoginInfo?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "마일스톤"
        addNavigationButton()
        addTableView()
        
        mileStoneTableView.dataSource = self
        mileStoneTableView.delegate = self
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
}

extension MilestoneViewController: LoginInfoContainer {
    func setup(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
}

extension MilestoneViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return view.frame.height * 0.336
    }
}

extension MilestoneViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = MileStoneTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? MileStoneTableViewCell ?? MileStoneTableViewCell()
        
        return cell
    }
}
