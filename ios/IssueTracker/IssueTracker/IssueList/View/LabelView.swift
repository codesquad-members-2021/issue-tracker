//
//  LabelView.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/09.
//

import UIKit

class LabelView: UILabel {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        fatalError()
    }
    
}


extension LabelView {
    
    private func configure() {
        translatesAutoresizingMaskIntoConstraints = false
        clipsToBounds = true
        layer.cornerRadius = 13
        textColor = .white
        font = UIFont(descriptor: UIFontDescriptor(name: "System", size: 15), size: 15)
        textAlignment = .center
    }
    
    func fillUI(with label: Label) {
        text = label.name
        backgroundColor = UIColor.hexToUIColor(hex: label.color)
        configureConstraint()
    }
    
    private func configureConstraint() {
        NSLayoutConstraint.activate([
            heightAnchor.constraint(equalToConstant: intrinsicContentSize.height + 10),
            widthAnchor.constraint(greaterThanOrEqualToConstant: intrinsicContentSize.width + 20)
        ])
    }
    
}

