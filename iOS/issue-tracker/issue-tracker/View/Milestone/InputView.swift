//
//  InputView.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/10.
//

import UIKit

class InputView: UIView {

    private let titleLabel: UILabel = {
        var label = UILabel()
        label.text = "제목"
        return label
    }()
    
    private let descriptionLabel: UILabel = {
        var label = UILabel()
        label.text = "설명"
        return label
    }()
    
    private let dueDateLabel: UILabel = {
        var label = UILabel()
        label.text = "완료일"
        return label
    }()
    
    private let firstLine: UIView = {
        var line = UIView()
        line.layer.borderColor = UIColor.lightGray.cgColor
        line.layer.borderWidth = 1
        return line
    }()
    
    private let secondLine: UIView = {
        var line = UIView()
        line.layer.borderColor = UIColor.lightGray.cgColor
        line.layer.borderWidth = 1
        return line
    }()
    
    private let titleTextField: UITextField = {
        var textField = UITextField()
        textField.borderStyle = .none
        return textField
    }()
    
    private let descriptionTextField: UITextField = {
        var textField = UITextField()
        textField.borderStyle = .none
        return textField
    }()
    
    private let dueDateTextField: UITextField = {
        var textField = UITextField()
        textField.borderStyle = .none
        return textField
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        backgroundColor = .white
        addSubViews()
        autoLayout()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        backgroundColor = .white
        addSubViews()
        autoLayout()
    }
    
    func addSubViews() {
        self.addSubview(titleLabel)
        self.addSubview(descriptionLabel)
        self.addSubview(dueDateLabel)
        self.addSubview(firstLine)
        self.addSubview(secondLine)
        self.addSubview(titleTextField)
        self.addSubview(descriptionTextField)
        self.addSubview(dueDateTextField)
    }
    
    func autoLayout() {
        titleLabel.snp.makeConstraints { label in
            label.top.equalTo(self.safeAreaLayoutGuide).offset(12)
            label.leading.equalTo(self.safeAreaLayoutGuide).offset(20)
            label.width.equalTo(47)
        }
        
        firstLine.snp.makeConstraints { view in
            view.height.equalTo(1)
            view.top.equalTo(titleLabel.snp.bottom).offset(10.5)
            view.leading.trailing.equalTo(self.safeAreaLayoutGuide)
        }

        descriptionLabel.snp.makeConstraints { label in
            label.top.equalTo(firstLine.snp.bottom).offset(10.5)
            label.leading.equalTo(self.safeAreaLayoutGuide).offset(20)
            label.width.equalTo(62)
        }
        
        secondLine.snp.makeConstraints { view in
            view.height.equalTo(1)
            view.top.equalTo(descriptionLabel.snp.bottom).offset(10.5)
            view.leading.trailing.equalTo(self.safeAreaLayoutGuide)
        }
        
        dueDateLabel.snp.makeConstraints { label in
            label.top.equalTo(secondLine.snp.bottom).offset(10.5)
            label.leading.equalTo(self.safeAreaLayoutGuide).offset(20)
            label.width.equalTo(62)
        }
        
        titleTextField.snp.makeConstraints { textField in
            textField.top.equalTo(self.safeAreaLayoutGuide).offset(11)
            textField.leading.equalTo(titleLabel.snp.trailing).offset(61)
            textField.trailing.equalTo(self.safeAreaLayoutGuide)
            textField.height.equalTo(22)
        }
        
        descriptionTextField.snp.makeConstraints { textField in
            textField.top.equalTo(firstLine.snp.bottom).offset(11)
            textField.leading.equalTo(descriptionLabel.snp.trailing).offset(61)
            textField.trailing.equalTo(self.safeAreaLayoutGuide)
            textField.height.equalTo(22)
        }
        
        dueDateTextField.snp.makeConstraints { textField in
            textField.top.equalTo(secondLine.snp.bottom).offset(11)
            textField.leading.equalTo(dueDateLabel.snp.trailing).offset(61)
            textField.trailing.equalTo(self.safeAreaLayoutGuide)
            textField.height.equalTo(22)
        }
    }
}
