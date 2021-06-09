//
//  IssueDataSource.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/08.
//

import UIKit

class IssueDataSource: NSObject {
    var issues: [Issue]
    
    init(issues: [Issue]) {
        self.issues = issues
        super.init()
    }
    
}


extension IssueDataSource: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return issues.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueCell.reuseIdentifier, for: indexPath) as? IssueCell else { return UITableViewCell() }
        
//        cell.fillUI()
        
        return cell
    }
    
}


