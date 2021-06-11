//
//  TestVC.swift
//  issueTracker
//
//  Created by 오킹 on 2021/06/09.
//

import UIKit

class IssueListFilterViewController: UIViewController, test {
    
    func close() {
        self.dismiss(animated: true, completion: nil)
    }
    
    @IBOutlet weak var filterOptionTableView: UITableView!
    private var headerView: HeaderView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        filterOptionTableView.dataSource = self
        filterOptionTableView.delegate = self
        
        configHeaderView()
        configFilterOptionTableView()
        configfilterOptionTableView()
        
        headerView.delegate = self
        headerView.setUpBackButton2(vc: self)
    }
    
    @objc
    func testt() {
        self.dismiss(animated: true, completion: nil)
    }
    
    private func configfilterOptionTableView() {
        filterOptionTableView.tableHeaderView?.backgroundColor = .black
        let footerView = UIView(frame: .zero)
        footerView.backgroundColor = .clear
        filterOptionTableView.tableFooterView = footerView;
    }
    
    private func configHeaderView() {
        headerView = HeaderView(frame: .zero)
        headerView.setUpTitle(text: "필터")
        headerView.setUpBackButton(text: "취소")
        headerView.setUpSaveButton(text: "저장")
        self.view.addSubview(headerView)
        
        headerView.translatesAutoresizingMaskIntoConstraints = false
        headerView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor).isActive = true
        headerView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        headerView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        headerView.heightAnchor.constraint(equalToConstant: self.view.frame.height/12).isActive = true
    }
    
    private func configFilterOptionTableView() {
        filterOptionTableView.translatesAutoresizingMaskIntoConstraints = false
        
        filterOptionTableView.topAnchor.constraint(equalTo: self.headerView.bottomAnchor).isActive = true
        filterOptionTableView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        filterOptionTableView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        filterOptionTableView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor).isActive = true
        
    }
}

extension IssueListFilterViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        switch section {
        case 0:
            return 1
        case 1:
            return 2
        case 2:
            return 3
        case 3:
            return 4
        default:
            return 0
        }
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "FilterOptionCell") as? FilterOptionCell else {
            return UITableViewCell()
        }
        return cell
    }
    func numberOfSections(in tableView: UITableView) -> Int {
        return 4
    }
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let sectionModels = ["상태", "작성자", "레이블", "마일스톤"]
        let view = UIView(frame: .zero)
        view.backgroundColor = .systemGray6
        let label = UILabel(frame: .zero)
        label.text = sectionModels[section]
        label.textColor = .gray
        label.sizeToFit()

        view.addSubview(label)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true
        label.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16).isActive = true
        return view
    }
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 50
    }
}

extension IssueListFilterViewController: UITableViewDelegate {
}
