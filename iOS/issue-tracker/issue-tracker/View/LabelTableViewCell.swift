import UIKit

class LabelTableViewCell: UITableViewCell {
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
    static let identifier = "LabelTableViewCell"
    
}
