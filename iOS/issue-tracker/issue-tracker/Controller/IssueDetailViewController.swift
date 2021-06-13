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
    private let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    private lazy var tableView: UITableView = {
        let tableView = UITableView()
        tableView.rowHeight = 130
        tableView.register(IssueDetailTableViewCell.self, forCellReuseIdentifier: cellReuseIdentifier)
        return tableView
    }()
    
    private let up = UIBarButtonItem(image: UIImage(systemName: "chevron.up.circle"),
                                     style: .plain, target: self, action: #selector(scrollToBefore))
    
    private let down = UIBarButtonItem(image: UIImage(systemName: "chevron.down.circle"),
                                       style: .plain, target: self, action: #selector(scrollToNext))
    
    private let textField: UITextField = {
        let textField = UITextField(frame: .zero)
        textField.placeholder = "코멘트를 입력하세요"
        let button = UIButton()
        button.setImage(UIImage(systemName: "arrow.up.circle.fill"), for: .normal)
        textField.rightView = button
        textField.rightViewMode = .always
        textField.layer.cornerRadius = 10
        textField.layer.masksToBounds = true
        return textField
    }()

    private lazy var toolbar: UIToolbar = {
        let toolbar = UIToolbar(frame: CGRect(origin: .zero, size: CGSize(width: 100, height: 100)))
        
        let comment = UIBarButtonItem(customView: textField)
        let space = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: comment, action: nil)
        toolbar.setItems([up, down, space, comment], animated: false)
        return toolbar
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .systemBackground
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "테스트 이슈 #2"
        
        tableView.dataSource = self
        tableView.delegate = self
        
        view.addSubview(tableView)
        view.addSubview(toolbar)
        
        tableView.selectRow(at: IndexPath(row: 0, section: 0), animated: false, scrollPosition: .none)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tabBarController?.tabBar.isHidden = true
        tableView.frame = view.bounds
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        toolbar.snp.makeConstraints { maker in
            maker.leading.trailing.equalToSuperview()
            maker.bottom.equalTo(view.safeAreaLayoutGuide)
            maker.height.equalTo(44)
        }
    }
    
    @objc
    private func scrollToBefore() {
        guard let indexPath = tableView.indexPathForSelectedRow,
              indexPath.row != 0 else { return }
        tableView.selectRow(at: IndexPath(row: indexPath.row - 1, section: indexPath.section),
                            animated: true, scrollPosition: .top)
    }
    
    @objc
    private func scrollToNext() {
        guard let indexPath = tableView.indexPathForSelectedRow,
              indexPath.row + 1 < data.count else { return }
        tableView.selectRow(at: IndexPath(row: indexPath.row + 1, section: indexPath.section),
                            animated: true, scrollPosition: .bottom)
    }
}

extension IssueDetailViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return data.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath)
        cell.accessoryView = UIImageView(image: UIImage(systemName: "ellipsis"))
        return cell
    }
}

extension IssueDetailViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
        UIView()
    }
}
