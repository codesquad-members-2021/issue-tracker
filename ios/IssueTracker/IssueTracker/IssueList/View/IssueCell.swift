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
    @IBOutlet weak var milestoneView: UIView!
    @IBOutlet weak var milestoneLabel: UILabel!
    @IBOutlet weak var labelStackView: UIStackView!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
    func fillUI(with issue: Issue) {
        titleLabel.text = issue.title
        descriptionLabel.text = issue.description
        descriptionLabel.addLineSpacing()
        configureMilestone(with: issue.milestone)
        fillLabels(with: issue.labels ?? [])
    }
    
    private func fillLabels(with labels: [Label]) {
        labels.forEach { label in
            let label_ = LabelView()
            label_.fillUI(with: label)
            self.labelStackView.addArrangedSubview(label_)
        }
    }
    
    private func configureMilestone(with milestone: Milestone?) {
        if let milestone = milestone {
            milestoneView.isHidden = false
            milestoneLabel.text = milestone.name
        } else {
            milestoneView.isHidden = true
            NSLayoutConstraint.activate([
                milestoneView.heightAnchor.constraint(equalTo: widthAnchor, multiplier: 0)
            ])
        }
    }
    
}
