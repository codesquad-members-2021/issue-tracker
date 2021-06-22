import UIKit

class IssueTableViewCell: UITableViewCell, Identifying {
    
    @IBOutlet weak var title: UILabel!
    @IBOutlet weak var content: UILabel!
    @IBOutlet weak var milestone: UILabel!
    @IBOutlet weak var label: UILabel!
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
    func configure(issue: Issue) {
        title.text = issue.title
        content.text = "안녕하세요"
        milestone.text = issue.milestone
        label.text = issue.labels.first?.title
        label.backgroundColor = UIColor(hex: issue.labels.first?.color ?? "#FFFFFF")
    }
    
}
