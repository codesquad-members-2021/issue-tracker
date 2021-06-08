//
//  IssueCell.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/08.
//

import UIKit

class IssueCell: UITableViewCell {

    static let reuseIdentifier = "IssueCell"
    static let nib = UINib(nibName: IssueCell.reuseIdentifier, bundle: nil)
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var descriptionLabel: UILabel!
    @IBOutlet weak var milestoneStackView: UIStackView!
    @IBOutlet weak var milestoneLabel: UILabel!
    @IBOutlet weak var labelLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
}
