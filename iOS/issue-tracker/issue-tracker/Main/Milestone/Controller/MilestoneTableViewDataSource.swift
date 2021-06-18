//
//  MilestoneTableViewDataSource.swift
//  issue-tracker
//
//  Created by jinseo park on 6/18/21.
//

import UIKit

class MilestoneTableViewDataSource: NSObject, UITableViewDataSource {
    
    private var milestones = [MileStone]()
    
    func update(milestones: [MileStone]) {
        self.milestones = milestones
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return milestones.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = MileStoneTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? MileStoneTableViewCell ?? MileStoneTableViewCell()
        
        let milesonte = milestones[indexPath.row]
        
        cell.configure(title: milesonte.title, description: milesonte.description, due_date: milesonte.due_date)
        return cell
    }
}
