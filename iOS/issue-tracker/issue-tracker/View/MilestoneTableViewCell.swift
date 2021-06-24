import UIKit

class MilestoneTableViewCell: UITableViewCell, Identifying {

    @IBOutlet weak var title: UILabel!
    @IBOutlet weak var content: UILabel!
    @IBOutlet weak var dueDate: UILabel!
    @IBOutlet weak var openIssueView: UIView!
    @IBOutlet weak var openIssueLabel: UILabel!
    @IBOutlet weak var closeIssueView: UIView!
    @IBOutlet weak var closeIssueLabel: UILabel!
    @IBOutlet weak var percentLabel: UILabel!
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
    override func awakeFromNib() {
        self.openIssueView.layer.borderWidth = 1
        let customBlueColor = UIColor(red: 0, green: 0.478, blue: 1, alpha: 1)
        self.openIssueView.layer.borderColor = customBlueColor.cgColor
        
        self.closeIssueView.layer.borderWidth = 1
        let customPurpleColor = UIColor(red: 0, green: 0.145, blue: 0.904, alpha: 1)
        self.openIssueView.layer.borderColor = customPurpleColor.cgColor
    }
    
}
