//
//  IssueTableViewDataSource.swift
//  issue-tracker
//
//  Created by jinseo park on 6/21/21.
//

import Foundation
import UIKit

class IssueTableViewDataSource: NSObject, UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = IssueTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? IssueTableViewCell ?? IssueTableViewCell()
        return cell
    }
    
    
}
