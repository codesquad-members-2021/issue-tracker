//
//  IDPasswordTextField.swift
//  issue-tracker
//
//  Created by zeke on 2021/06/08.
//
import UIKit
import SnapKit

@IBDesignable
class IDPasswordTextField: UIView {
    
    let IDLabel: UILabel = {
        var label = UILabel()
        label.text = "아이디"
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    let passwordLabel: UILabel = {
        var label = UILabel()
        label.text = "비밀번호"
        return label
    }()
    
    let line: UIView = {
        var line = UIView(frame: CGRect(x: 0, y: 0, width: 100, height: 1))
        line.layer.borderColor = UIColor.black.cgColor
        line.layer.borderWidth = 1
        return line
    }()
    
    let IDTextField: UITextField = {
       var textField = UITextField()
        textField.borderStyle = .none
        return textField
    }()
    
    let passwordTextField: UITextField = {
        var textField = UITextField()
        textField.borderStyle = .none
        return textField
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubViews()
        autoLayout()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubViews()
        autoLayout()
    }
    
    func addSubViews() {
        self.addSubview(IDLabel)
        self.addSubview(passwordLabel)
        self.addSubview(line)
        self.addSubview(IDTextField)
        self.addSubview(passwordTextField)
    }
    
    func autoLayout() {
        IDLabel.snp.makeConstraints { label in
            label.top.equalTo(self.safeAreaLayoutGuide).offset(12)
            label.leading.equalTo(self.safeAreaLayoutGuide).offset(20)
        }
        
        line.snp.makeConstraints { view in
            view.height.equalTo(1)
            view.top.equalTo(IDLabel.snp.bottom).offset(10.5)
            view.leading.trailing.equalTo(self.safeAreaLayoutGuide)
        }
        
        passwordLabel.snp.makeConstraints { label in
            label.top.equalTo(line.snp.bottom).offset(10.5)
            label.leading.equalTo(self.safeAreaLayoutGuide).offset(20)
        }
        
        IDTextField.snp.makeConstraints { textField in
            textField.top.equalTo(self.safeAreaLayoutGuide).offset(11)
            textField.leading.equalTo(IDLabel.snp.trailing).offset(61)
            textField.trailing.equalTo(self.safeAreaLayoutGuide)
            textField.height.equalTo(22)
        }
        
        passwordTextField.snp.makeConstraints { textField in
            textField.top.equalTo(self.safeAreaLayoutGuide).offset(11)
            textField.leading.equalTo(passwordLabel.snp.trailing).offset(61)
            textField.trailing.equalTo(self.safeAreaLayoutGuide)
            textField.height.equalTo(22)
        }
    }
    
}
