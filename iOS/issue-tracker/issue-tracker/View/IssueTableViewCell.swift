import UIKit

protocol Identifying {
    static var identifier: String { get }
}

extension Identifying {
    static var identifier: String {
        return String(describing: Self.self)
    }
}

class IssueTableViewCell: UITableViewCell, Identifying {
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
}
