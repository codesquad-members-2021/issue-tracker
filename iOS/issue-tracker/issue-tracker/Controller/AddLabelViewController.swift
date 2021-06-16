//
//  AddViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/10.
//

import UIKit

class AddLabelViewController: UIViewController {
    private let cellReuseIdentifier = "AddLabelViewControllerCell"
    let addLabelViewModel = AddLabelViewModel()
    private lazy var tableView: UITableView = {
        let tableView = UITableView(frame: .zero, style: .grouped)
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: cellReuseIdentifier)
        return tableView
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.title = "새로운 레이블"
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "뒤로",
                                                                style: .plain,
                                                                target: self,
                                                                action: nil)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "저장",
                                                                 style: .plain,
                                                                 target: self,
                                                                 action: nil)
        
        tableView.dataSource = self
        view.addSubview(tableView)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        tableView.frame = view.bounds
    }
}

extension AddLabelViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath)
        let textField = UITextField(frame: CGRect(x: cell.frame.origin.x + 120, y: cell.frame.origin.y, width: cell.frame.width - 140, height: 44))
        cell.contentView.addSubview(textField)
        switch indexPath.row {
        case 0:
            cell.textLabel?.text = "제목"
            return cell
        case 1:
            cell.textLabel?.text = "설명"
            return cell
        case 2:
            cell.textLabel?.text = "배경색"
            return cell
        default:
            fatalError()
        }
    }
}
