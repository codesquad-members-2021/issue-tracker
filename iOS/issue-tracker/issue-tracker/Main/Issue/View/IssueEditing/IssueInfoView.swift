//
//  IssueInfoView.swift
//  issue-tracker
//
//  Created by Song on 2021/06/22.
//

import UIKit

final class IssueInfoControl: UIControl {
    
    private lazy var infoLabel: UILabel = {
        let label = UILabel()
        label.textColor = .lightGray
        label.textAlignment = .right
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private lazy var infoSetButton: UIButton = {
        let button = UIButton()
        let buttonImage = UIImage(systemName: "chevron.right")
        button.tintColor = .lightGray
        button.setTitle(nil, for: .normal)
        button.setImage(buttonImage, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private let spacing: CGFloat = 15
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        addInfoSetButton()
        addInfoLabel()
    }
    
    private func addInfoSetButton() {
        addSubview(infoSetButton)
        
        NSLayoutConstraint.activate([
            infoSetButton.widthAnchor.constraint(equalToConstant: 20),
            infoSetButton.trailingAnchor.constraint(equalTo: trailingAnchor),
            infoSetButton.centerYAnchor.constraint(equalTo: centerYAnchor)
        ])
    }
    
    private func addInfoLabel() {
        addSubview(infoLabel)
        
        NSLayoutConstraint.activate([
            infoLabel.leadingAnchor.constraint(equalTo: leadingAnchor),
            infoLabel.trailingAnchor.constraint(equalTo: infoSetButton.leadingAnchor, constant: -spacing),
            infoLabel.centerYAnchor.constraint(equalTo: centerYAnchor)
        ])
    }
    
    func changeInfoLabelText(to text: String) {
        infoLabel.text = text
    }
}
