//
//  IssueFilterSectionHeader.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/16.
//

import UIKit

class CustomSectionHeader: UIView {
    
    private let customLabel: UILabel
    private let customLabelTitles: [String]
    
    override init(frame: CGRect) {
        self.customLabel = UILabel(frame: .zero)
        self.customLabelTitles = ["상태", "작성자", "레이블", "마일스톤"]
        super.init(frame: frame)
        self.backgroundColor = .systemGray6
    }
    
    required init?(coder: NSCoder) {
        self.customLabel = UILabel(frame: .zero)
        self.customLabelTitles = ["상태", "작성자", "레이블", "마일스톤"]
        super.init(coder: coder)
    }
    
    func initCustomLabel(index: Int) {
        self.customLabel.text = customLabelTitles[index]
        self.customLabel.textColor = .gray
        self.customLabel.sizeToFit()
        self.addSubview(customLabel)
        
        self.customLabel.translatesAutoresizingMaskIntoConstraints = false
        self.customLabel.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
        self.customLabel.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 16).isActive = true
    }
    
    func initCustomLabelforNewIssue(title: String, size: CGFloat) {
        self.customLabel.text = title
        self.customLabel.font = .systemFont(ofSize: size)
        self.customLabel.sizeToFit()
        
        self.addSubview(customLabel)
        customLabel.translatesAutoresizingMaskIntoConstraints = false
        customLabel.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
        customLabel.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 16).isActive = true
    }
    
    func set(color: UIColor) {
        self.backgroundColor = color
    }
}
