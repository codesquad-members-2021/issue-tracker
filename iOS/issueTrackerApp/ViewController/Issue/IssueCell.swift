//
//  IssueCell.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/09.
//

import UIKit

class IssueCell: UITableViewCell {
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var descriptionLabel: UILabel!
    @IBOutlet weak var milestonesLabel: UILabel!
    @IBOutlet weak var tagStackView: TagStackView!
    
    static var identifier: String {
        return String(describing: self)
    }
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()

    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    public func configure(_ issue: String? = nil) {
        let tempTagLabel = TagLabel()
            tempTagLabel.custom(title: "sdf", colorCode: "#f69e7b")
        self.tagStackView.addTag(tagLabel: tempTagLabel)
    }
}
