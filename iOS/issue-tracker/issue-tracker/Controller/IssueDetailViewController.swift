//
//  IssueDetailViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/11.
//

import UIKit
import SnapKit

class IssueDetailViewController: UIViewController {

    private let cellReuseIdentifier = "IssueDetailCell"
    private lazy var tableView: UITableView = {
        let tableView = UITableView()
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: cellReuseIdentifier)
        return tableView
    }()
    
    private let toolbar: UIToolbar = {
        let toolbar = UIToolbar(frame: CGRect(x: 0, y: 0, width: 100, height: 100))
        let up = UIBarButtonItem(image: UIImage(systemName: "chevron.up.circle"),
                                 style: .plain, target: self, action: nil)
        let down = UIBarButtonItem(image: UIImage(systemName: "chevron.down.circle"),
                                   style: .plain, target: self, action: nil)
        let searchbar = UISearchBar(frame: CGRect(origin: .zero, size: CGSize(width: 200, height: 100)))
        searchbar.placeholder = "코멘트를 입력하세요"
        searchbar.setImage(UIImage(systemName: "arrow.up.circle.fill"), for: .clear, state: .normal)
        let search = UIBarButtonItem(customView: searchbar)
        toolbar.setItems([up, down, search], animated: false)
        return toolbar
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .systemBackground
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "테스트 이슈 #2"
        tableView.dataSource = self
        view.addSubview(toolbar)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tabBarController?.tabBar.isHidden = true
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        toolbar.snp.makeConstraints { maker in
            maker.leading.trailing.equalToSuperview()
            maker.bottom.equalTo(view.safeAreaLayoutGuide)
            maker.height.equalTo(44)
        }
    }
}

extension IssueDetailViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath)
        return cell
    }
}
