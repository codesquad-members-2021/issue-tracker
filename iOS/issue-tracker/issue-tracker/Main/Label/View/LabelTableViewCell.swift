//
//  LabelTableViewCell.swift
//  issue-tracker
//
//  Created by Song on 2021/06/14.
//

import UIKit

final class LabelTableViewCell: UITableViewCell {

    private lazy var labelView: LabelView = LabelView()
    
    private lazy var labelDescription: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.systemGray2
        label.numberOfLines = 1
        label.text = placeholder
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private lazy var spacing: CGFloat = {
        return frame.width * 0.05
    }()
    
    private let placeholder = "No description provided"
    
    static var reuseID: String {
        return String(describing: self)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setViews()
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        setViews()
    }
    
    private func setViews() {
        backgroundColor = UIColor.white
        addLabelTitle()
        addLabelDescription()
    }
    
    private func addLabelTitle() {
        addSubview(labelView)
        
        NSLayoutConstraint.activate([
            labelView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: spacing),
            labelView.topAnchor.constraint(equalTo: topAnchor, constant: spacing * 1.5)
        ])
    }
    
    private func addLabelDescription() {
        addSubview(labelDescription)
        
        NSLayoutConstraint.activate([
            labelDescription.leadingAnchor.constraint(equalTo: leadingAnchor, constant: spacing),
            labelDescription.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -spacing),
            labelDescription.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -spacing * 1.5)
        ])
    }
    
    func configure(with backgroundColor: UIColor,_ titleColor: UIColor, _ title: String,_ description: String) {
        labelView.configure(with: backgroundColor, titleColor, title)
        self.labelDescription.text = description.count != 0 ? description : placeholder
    }

}
