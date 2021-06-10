//
//  IssueListFilterViewController.swift
//  issue-tracker
//
//  Created by user on 2021/06/10.
//

import UIKit

class IssueListFilterViewController: UIViewController {

    @IBOutlet weak var filterTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.filterTableView.register(FilterTableViewCell.self, forCellReuseIdentifier: FilterTableViewCell.identifier)
    }

}

extension IssueListFilterViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if section == 0 {
            return 3
        } else {
            return 5
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: FilterTableViewCell.identifier, for: indexPath) as? FilterTableViewCell else { return UITableViewCell() }
        cell.title.text = "asdfasdfasdf"
        return cell
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        4
    }
}
