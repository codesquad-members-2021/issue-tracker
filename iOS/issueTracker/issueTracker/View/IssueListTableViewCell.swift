//
//  IssueListTableViewCell.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/09.
//

import UIKit

class IssueListTableViewCell: UITableViewCell {
    
    static var cellIdentity: String = "issueCell"
    
    @IBOutlet weak var issueTitle: UILabel!
    @IBOutlet weak var issueDescription: UILabel!
    @IBOutlet weak var milestoneTitle: UILabel!
    @IBOutlet weak var labelTitle: UILabel!
}
