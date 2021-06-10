import UIKit

class IssueCell: UICollectionViewCell {
    
    static let identifier = "IssueCell"
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var commnetLabel: UILabel!
    @IBOutlet weak var milestoneLabel: UILabel!
    @IBOutlet weak var labelStackView: UIStackView!
    
    func configure(_ title:String, _ comment:String, milestone:String, labels:[Label]) {
        self.titleLabel.text = title
        self.commnetLabel.text = comment
        self.milestoneLabel.text = milestone
        for index in 0..<labels.count {
            let label = LabelView()
            label.configure(labels[index].name, labels[index].colorCode)
            labelStackView.addArrangedSubview(label)
        }
    }
}
