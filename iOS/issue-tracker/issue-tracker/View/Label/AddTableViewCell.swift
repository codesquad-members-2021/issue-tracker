//
//  AddTableViewCell.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/16.
//

import UIKit
import RxSwift

class AddTableViewCell: UITableViewCell {

    static let identifier = "AddTableViewCell"

    let textField = UITextField()
    let reloadButton: UIButton = {
        var button = UIButton()
        button.setBackgroundImage(UIImage(systemName: "gobackward"), for: .normal)
        return button
    }()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        textField.frame = CGRect(x: self.frame.origin.x + 120, y: self.frame.origin.y, width: self.frame.width - 140, height: 44)
        contentView.addSubview(textField)
    }
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    func configureTextFieldPlaceHolder(text: String) {
        self.textField.placeholder = text
    }

    func configureBackgroundCellMode() {
        self.textField.text = "#3DDCFF"
        self.textField.rightView = reloadButton
        self.textField.rightViewMode = .always
    }
}
