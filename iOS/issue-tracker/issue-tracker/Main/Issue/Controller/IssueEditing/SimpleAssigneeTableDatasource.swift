//
//  SimpleAssigneeTableDatasource.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class SimpleAssigneeTableDatasource: NSObject, SimpleInfoTableDatasource {

    private var assignees = [User]()
    
    func update(with infos: [Identifiable]) {
        guard let assignees = infos as? [User] else { return }
        self.assignees = assignees
    }
    
    func info(for index: Int) -> Identifiable? {
        guard assignees.count > index else { return nil }
        return assignees[index]
    }
    
    func index(for info: Identifiable) -> Int? {
        var targetIndex: Int?
        assignees.enumerated().forEach { (index, assignee) in
            if assignee.identifier() == info.identifier() {
                targetIndex = index
            }
        }
        return targetIndex
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return assignees.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = SimpleAssigneeTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? SimpleAssigneeTableViewCell ?? SimpleAssigneeTableViewCell()
        let cellInfo = assignees[indexPath.row]
        cell.configure(with: cellInfo.name, imageUrl: cellInfo.imageUrl)
        return cell
    }
}
