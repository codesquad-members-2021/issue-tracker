import UIKit

class IssueTableViewCell: UITableViewCell {
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
    static let identifier = "IssueTableViewCell"
    
}
