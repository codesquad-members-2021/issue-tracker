//
//  IssueFilterViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/10.
//

import UIKit

class IssueFilterViewController: UIViewController {

    private let cellReuseIdentifier = "IssueFilterTableViewCell"
    private lazy var tableView: UITableView = {
        let tableView = UITableView(frame: .zero, style: .grouped)
        tableView.allowsMultipleSelection = true
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: cellReuseIdentifier)
        return tableView
    }()

    var authors = ["Zeke", "Soo"]
    private let issueFilter = ["열린 이슈", "내가 작성한 이슈", "나에게 할당된 이슈", "내가 댓글을 남긴 이슈", "닫힌 이슈"]
    private let issueLabels = ["레이블 없음", "bug", "feature"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        navigationItem.title = "필터"
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "취소",
                                                                style: .plain,
                                                                target: self,
                                                                action: #selector(cancelButtonTapped))
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "저장",
                                                                 style: .plain,
                                                                 target: self,
                                                                 action: nil)
        tableView.delegate = self
        tableView.dataSource = self
        tableView.frame = view.bounds
        
        view.addSubview(tableView)
    }
    
    @objc
    private func cancelButtonTapped() {
        dismiss(animated: true)
    }
}

extension IssueFilterViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        switch section {
        case 0:
            return "상태"
        case 1:
            return "작성자"
        case 2:
            return "레이블"
        default:
            return nil
        }
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let selected = tableView.cellForRow(at: indexPath)
        selected?.accessoryType = .checkmark
    }
    
    func tableView(_ tableView: UITableView, didDeselectRowAt indexPath: IndexPath) {
        let selected = tableView.cellForRow(at: indexPath)
        selected?.accessoryType = .none
    }
}

extension IssueFilterViewController: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        switch section {
        case 0:
            return 5
        case 1:
            return authors.count
        case 2:
            return 3
        default:
            return 0
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath)
        cell.selectionStyle = .none
        switch indexPath.section {
        case 0:
            cell.textLabel?.text = issueFilter[indexPath.row]
            return cell
        case 1:
            cell.textLabel?.text = authors[indexPath.row]
            return cell
        case 2:
            cell.textLabel?.text = issueLabels[indexPath.row]
            return cell
        default:
            return cell
        }
    }
}
