//
//  TestVC.swift
//  issueTracker
//
//  Created by 오킹 on 2021/06/09.
//

import UIKit

class IssueFilterViewController: UIViewController {
    @IBOutlet weak var filterTableView: UITableView!
    private var filterOptionHeaderView: HeaderView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        filterTableView.dataSource = self
        filterTableView.delegate = self
        configHeaderView()
        configFilterOptionTableView()
        filterOptionHeaderView.setUpBackButton2(viewController: self)
    }
    @objc
    func closeFilterController() {
        self.dismiss(animated: true, completion: nil)
    }
    
    private func configFilterOptionTableView() {
        filterTableView.tableHeaderView?.backgroundColor = .black
        let footerView = UIView(frame: .zero)
        footerView.backgroundColor = .clear
        filterTableView.tableFooterView = footerView
        filterTableView.translatesAutoresizingMaskIntoConstraints = false
        filterTableView.topAnchor.constraint(equalTo: self.filterOptionHeaderView.bottomAnchor).isActive = true
        filterTableView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        filterTableView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        filterTableView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor).isActive = true
    }
    
    private func configHeaderView() {
        filterOptionHeaderView = HeaderView(frame: .zero)
        filterOptionHeaderView.setUpTitle(text: CustomHeaderViewTitle.headerViewFilter.description)
        filterOptionHeaderView.setUpBackButton(text: CustomHeaderViewTitle.headerViewCancel.description)
        filterOptionHeaderView.setUpSaveButton(text: CustomHeaderViewTitle.headerViewSave.description)
        self.view.addSubview(filterOptionHeaderView)
        filterOptionHeaderView.translatesAutoresizingMaskIntoConstraints = false
        filterOptionHeaderView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor).isActive = true
        filterOptionHeaderView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        filterOptionHeaderView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        filterOptionHeaderView.heightAnchor.constraint(equalToConstant: self.view.frame.height/12).isActive = true
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
        let customView = CustomSectionHeader.init(frame: .zero)
        customView.set(color: .systemGray6)
        customView.initCustomLabel(index: section)
        return customView
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
