import UIKit

class IssueTableViewCell: UITableViewCell, Identifying {
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
}
