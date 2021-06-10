//
//  AddViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/10.
//

import UIKit

class AddViewController: UIViewController {
    private let tableView: UITableView = {
        let tableView = UITableView(frame: .zero, style: .grouped)
        tableView.register(SubTitleStyleTableViewCell.self, forCellReuseIdentifier: "AddViewControllerCell")
        return tableView
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        // Navigation
        navigationItem.title = "새로운 마일스톤"
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "뒤로",
                                                                     style: .plain,
                                                                     target: self,
                                                                     action: nil)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "저장",
                                                                 style: .plain,
                                                                 target: self,
                                                                 action: nil)
        
        tableView.delegate = self
        //tableView.dataSource = self
        //view.addSubview(tableView)
        view.addSubview(InputView(frame: view.bounds))
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        //tableView.frame = view.bounds
    }
}

extension AddViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "AddViewControllerCell", for: indexPath)
        switch indexPath.row {
        case 0:
            cell.textLabel?.text = "제목"
            cell.detailTextLabel?.text = "asda"
            return cell
        case 1:
            cell.textLabel?.text = "설명"
            return cell
        case 2:
            cell.textLabel?.text = "완료일"
            return cell
        default:
            fatalError()
        }
    }
}

extension AddViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let cell = tableView.cellForRow(at: indexPath)
        cell?.becomeFirstResponder()
    }
}

class SubTitleStyleTableViewCell: UITableViewCell {
    private let labe: UILabel = {
        let label = UILabel()
        label.textColor = .systemGray
        label.text = "제목"
        return label
    }()
    
    private let textField: UITextField = {
        let textField = UITextField()
        textField.placeholder = "이름...."
        return textField
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: .default, reuseIdentifier: reuseIdentifier)
        addSubview(labe)
        addSubview(textField)
        selectionStyle = .none
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        labe.frame = CGRect(x: 0, y: 0, width: 40, height: self.frame.height)
        textField.frame = CGRect(x: 40, y: 0, width: self.frame.width - 40, height: self.frame.height)
    }
}
