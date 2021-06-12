//
//  NewIssueViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/11.
//

import UIKit
import SnapKit

@IBDesignable
class NewIssueViewController: UIViewController {
    
    private let additionalInfo = ["레이블", "마일스톤", "작성자"]
    private let cellReuseIdentifier = "NewIssueViewCell"
    
    private let subject: UILabel = {
        let label = UILabel()
        label.text = "제목"
        return label
    }()
    
    private let textField: UITextField = {
        let textField = UITextField()
        textField.placeholder = "제목을 입력하세요."
        return textField
    }()
    
    private lazy var tableView: UITableView = {
        let tableView = UITableView()
        tableView.isScrollEnabled = false
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: cellReuseIdentifier)
        return tableView
    }()

    private let segmentedControl = UISegmentedControl(items: ["마크다운", "미리보기"])
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        
        tableView.dataSource = self
        tableView.delegate = self
        
        let save = UIBarButtonItem(title: "저장", style: .plain, target: self, action: nil)
        navigationItem.rightBarButtonItem = save
        navigationItem.titleView = segmentedControl
        segmentedControl.selectedSegmentIndex = 0
        
        view.addSubview(subject)
        view.addSubview(textField)
        view.addSubview(tableView)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        subject.snp.makeConstraints { maker in
            maker.leading.top.equalTo(view.safeAreaLayoutGuide).inset(20)
            maker.width.equalTo(70)
        }
        textField.snp.makeConstraints { maker in
            maker.leading.equalTo(subject.snp.trailing)
            maker.trailing.equalTo(view.safeAreaLayoutGuide).inset(20)
            maker.height.equalTo(44)
            maker.centerY.equalTo(subject.snp.centerY)
        }
        tableView.snp.makeConstraints { maker in
            maker.top.equalTo(textField.snp.bottom)
            maker.leading.trailing.equalTo(view.safeAreaLayoutGuide).inset(20)
            maker.bottom.equalTo(view.safeAreaLayoutGuide)
        }
    }
}

extension NewIssueViewController: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        return 2
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        switch section {
        case 0:
            return 1
        case 1:
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
            cell.addSubview(UITextView(frame: cell.contentView.bounds))
        case 1:
            cell.textLabel?.text = additionalInfo[indexPath.row]
            cell.accessoryType = .disclosureIndicator
        default:
            break
        }
        return cell
    }
}

extension NewIssueViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        if section == 1 {
            return "추가 정보"
        }
        return nil
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        switch indexPath.section {
        case 0:
            return 440
        case 1:
            return 44
        default:
            return 0
        }
    }
    
    func tableView(_ tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
        return UIView()
    }
}
