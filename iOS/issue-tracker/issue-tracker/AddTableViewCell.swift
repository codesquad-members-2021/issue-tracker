//
//  AddTableViewCell.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/16.
//

import UIKit

class AddTableViewCell: UITableViewCell {
    
    static let reuseIdentifier = "AddTableViewCell"
    var textField = UITextField()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        textField.frame = CGRect(x: self.frame.origin.x + 120, y: self.frame.origin.y, width: self.frame.width - 140, height: 44)
        contentView.addSubview(textField)
    }
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func bind(_ completion: (UITextField) -> Void) {
        completion(textField)
    }
}
