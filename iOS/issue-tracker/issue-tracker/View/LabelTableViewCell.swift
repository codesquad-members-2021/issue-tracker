import UIKit

class LabelTableViewCell: UITableViewCell, Identifying {
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
}
