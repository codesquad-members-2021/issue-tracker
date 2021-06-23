//
//  ToolBarTextField.swift
//  
//
//  Created by Ador on 2021/06/17.
//

import UIKit

protocol ToolBarTextFieldDelegate: AnyObject {
    func register()
}

final class ToolBarTextField: UITextField {

    weak var textFieldDelegate: ToolBarTextFieldDelegate?

    private let sendButton: UIButton = {
        let button = UIButton()
        button.addTarget(self, action: #selector(didTapSend), for: .touchUpInside)
        button.setImage(UIImage(systemName: "arrow.up.circle.fill"), for: .normal)
        return button
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        self.placeholder = "코멘트를 입력하세요"
        self.rightView = sendButton
        self.rightViewMode = .always
        self.layer.cornerRadius = 15
        self.layer.masksToBounds = true
        self.backgroundColor = .systemGroupedBackground
        self.translatesAutoresizingMaskIntoConstraints = false
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }

    @objc
    func didTapSend() {
        textFieldDelegate?.register()
    }
}
