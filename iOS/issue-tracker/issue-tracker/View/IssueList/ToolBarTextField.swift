//
//  ToolBarTextField.swift
//  
//
//  Created by Ador on 2021/06/17.
//

import UIKit

class ToolBarTextField: UITextField {

    let sendButton: UIButton = {
        let button = UIButton()
        button.setImage(UIImage(systemName: "arrow.up.circle.fill"), for: .normal)
        return button
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.placeholder = "코멘트를 입력하세요"
        self.rightView = sendButton
        self.rightViewMode = .always
        self.layer.cornerRadius = 10
        self.layer.masksToBounds = true
        self.translatesAutoresizingMaskIntoConstraints = false
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
