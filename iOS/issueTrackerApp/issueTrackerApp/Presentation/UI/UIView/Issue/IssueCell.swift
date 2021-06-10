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
    }
    
    // will fetch issue data type from server later on
    public func configureAll(_ issue: String? = nil) {
        self.configureTitleLabel(with: issue)
        self.configureDescriptionLabel(with: issue)
        self.configureMileStonesLabel(with: issue)
        self.configureTagLabelStack(with: issue)
    }
    
    private func configureTitleLabel(with issue: String? = nil) {
        self.titleLabel.text = "issue.title"
    }
    
    private func configureDescriptionLabel(with issue: String? = nil) {
        self.descriptionLabel.text = "issue.description"
    }
    
    private func configureMileStonesLabel(with issue: String? = nil) {
        let fullString = NSMutableAttributedString(string: "")
        let imageAttachment = NSTextAttachment()
        imageAttachment.image = UIImage(systemName: "exclamationmark.circle")
        let imageString = NSAttributedString(attachment: imageAttachment)
        fullString.append(imageString)
        fullString.append(NSAttributedString(string: "issue.mileStoneName"))
        
        self.milestonesLabel.attributedText = fullString
    }
    
    private func configureTagLabelStack(with issue: String? = nil) {
        let tempTagLabel = TagLabel()
            tempTagLabel.custom(title: "   issue.tagTitle   ", colorCode: "#f69e7b")
        self.tagStackView.addTag(tagLabel: tempTagLabel)
    }
}
