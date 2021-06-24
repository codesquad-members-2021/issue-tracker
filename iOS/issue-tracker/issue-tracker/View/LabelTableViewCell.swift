import UIKit

class LabelTableViewCell: UITableViewCell, Identifying {
    
    @IBOutlet weak var color: UIView!
    @IBOutlet weak var title: UILabel!
    @IBOutlet weak var content: UILabel!
    
    static var nib: UINib {
        return UINib(nibName: identifier, bundle: nil)
    }
    
    func configure(detailLabel: DetailLabel) {
        title.text = detailLabel.title
        content.text = detailLabel.content
        color.backgroundColor = UIColor(hex: detailLabel.color)
    }
    
}
