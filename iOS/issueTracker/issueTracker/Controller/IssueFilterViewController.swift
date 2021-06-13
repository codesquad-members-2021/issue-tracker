//
//  TestVC.swift
//  issueTracker
//
//  Created by 오킹 on 2021/06/09.
//

import UIKit

class IssueFilterViewController: UIViewController, customNavigationHeader {
    @IBOutlet weak var filterTableView: UITableView!
    private var headerView: HeaderView!
    override func viewDidLoad() {
        super.viewDidLoad()
        filterTableView.dataSource = self
        filterTableView.delegate = self
        configHeaderView()
        configFilterOptionTableView()
        configfilterOptionTableView()
        headerView.set(delegate: self)
        headerView.setUpBackButton2(viewController: self)
    }
    func close() {
        self.dismiss(animated: true, completion: nil)
    }
    @objc
    func testt() {
        self.dismiss(animated: true, completion: nil)
    }
    private func configfilterOptionTableView() {
        filterTableView.tableHeaderView?.backgroundColor = .black
        let footerView = UIView(frame: .zero)
        footerView.backgroundColor = .clear
        filterTableView.tableFooterView = footerView
    }
    private func configHeaderView() {
        headerView = HeaderView(frame: .zero)
        headerView.setUpTitle(text: CustomHeaderViewTitle.headerViewFilter.description)
        headerView.setUpBackButton(text: CustomHeaderViewTitle.headerViewCancel.description)
        headerView.setUpSaveButton(text: CustomHeaderViewTitle.headerViewSave.description)
        self.view.addSubview(headerView)
        headerView.translatesAutoresizingMaskIntoConstraints = false
        headerView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor).isActive = true
        headerView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        headerView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        headerView.heightAnchor.constraint(equalToConstant: self.view.frame.height/12).isActive = true
    }
    private func configFilterOptionTableView() {
        filterTableView.translatesAutoresizingMaskIntoConstraints = false
        filterTableView.topAnchor.constraint(equalTo: self.headerView.bottomAnchor).isActive = true
        filterTableView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        filterTableView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        filterTableView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor).isActive = true
    }
}

extension IssueFilterViewController: UITableViewDataSource {
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

extension IssueFilterViewController: UITableViewDelegate {
}

enum CustomHeaderViewTitle: CustomStringConvertible {
    case headerViewFilter
    case headerViewCancel
    case headerViewSave
    var description: String {
        switch self {
        case .headerViewFilter:
            return "필터"
        case .headerViewSave:
            return "저장"
        case .headerViewCancel:
            return "취소"
        }
    }
}
