//
//  IssueListFilterViewController.swift
//  issue-tracker
//
//  Created by user on 2021/06/10.
//

import UIKit

class IssueListFilterViewController: UIViewController {

    enum Section: Int, CaseIterable {
        case state, author, label, mileStone
        
        func sectionDescription() -> String {
            switch self {
            case .state:
                return "상태"
            case .author:
                return "작성자"
            case .label:
                return "레이블"
            case .mileStone:
                return "마일스톤"
            }
        }
    }
    
    @IBOutlet weak var filterTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        filterTableView.tableFooterView = UIView()
    }
    
    func configureHeaderView(section: Int) -> UIView {
        let headerView = UIView(frame: .zero)
        headerView.backgroundColor = UIColor(red: 242/255, green: 242/255, blue: 247/255, alpha: 1)
        let label = UILabel(frame: .zero)
        label.textColor = UIColor(red: 135/255, green: 135/255, blue: 141/255, alpha: 1)
        headerView.addSubview(label)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.leftAnchor.constraint(equalTo: headerView.leftAnchor, constant: 16).isActive = true
        label.centerYAnchor.constraint(equalTo: headerView.centerYAnchor).isActive = true
        label.text = Section.allCases[section].sectionDescription()
        
        return headerView
    }

    @IBAction func pressedCancelButton(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
}

extension IssueListFilterViewController: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        let tableViewSection = Section.allCases[section]
        switch tableViewSection {
        case .state:
            return 1
        case .author:
            return 2
        case .label:
            return 3
        case .mileStone:
            return 4
        }
        
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: FilterTableViewCell.identifier, for: indexPath) as? FilterTableViewCell else { return UITableViewCell() }
        cell.title.text = "asdfasdfasdf"
        cell.checkImage.isHidden = false
        return cell
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return Section.allCases.count
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        return configureHeaderView(section: section)
    }
}
