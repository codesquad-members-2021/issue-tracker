import UIKit

class IssueCell: UICollectionViewCell {
    
    static let identifier = "IssueCell"
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var commnetLabel: UILabel!
    @IBOutlet weak var milestoneLabel: UILabel!
    @IBOutlet weak var labelLabel: UILabel!
    
    func configure(_ title:String, _ comment:String, milestone:String, label:String) {
        self.titleLabel.text = title
        self.commnetLabel.text = comment
        self.milestoneLabel.text = milestone
        self.labelLabel.text = label
    }
}
