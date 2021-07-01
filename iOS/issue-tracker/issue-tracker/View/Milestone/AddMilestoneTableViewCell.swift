//
//  AddTableViewCell.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/16.
//

import UIKit

class AddMilestoneTableViewCell: UITableViewCell {

    static let reuseIdentifier = "AddMilestoneTableViewCell"
    var textField = UITextField()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        textField.frame = CGRect(x: self.frame.origin.x + 100, y: self.frame.origin.y, width: self.frame.width - 100, height: 44)
        contentView.addSubview(textField)
    }
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        textField.frame = CGRect(x: self.frame.origin.x + 100, y: self.frame.origin.y, width: self.frame.width - 100, height: 44)
        contentView.addSubview(textField)
    }

    func bind(_ completion: (UITextField) -> Void) {
        completion(textField)
    }
}
