//
//  SimpleMilestoneTableDatasource.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class SimpleMilestoneTableDatasource: NSObject, SimpleInfoTableDatasource {

    private var milestones = [MileStone]()
    
    func update(with infos: [Identifiable]) {
        guard let milestones = infos as? [MileStone] else { return }
        self.milestones = milestones
    }
    
    func info(for index: Int) -> Identifiable? {
        guard milestones.count > index else { return nil }
        return milestones[index]
    }
    
    func index(for info: Identifiable) -> Int? {
        var targetIndex: Int?
        milestones.enumerated().forEach { (index, label) in
            if label.identifier() == info.identifier() {
                targetIndex = index
            }
        }
        return targetIndex
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return milestones.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = SimpleMilestoneTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? SimpleMilestoneTableViewCell ?? SimpleMilestoneTableViewCell()
        let cellInfo = milestones[indexPath.row]
        cell.configure(with: cellInfo.title)
        return cell
    }
}
