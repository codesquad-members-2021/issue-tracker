//
//  LabelTableViewCell.swift
//  issue-tracker
//
//  Created by Song on 2021/06/14.
//

import UIKit

class LabelTableViewCell: UITableViewCell {

    private lazy var labelView: LabelView = LabelView()
    
    private lazy var labelDescription: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.systemGray2
        label.numberOfLines = 1
        label.text = "No description provided"
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private lazy var spacing: CGFloat = {
        return frame.width * 0.05
    }()
    
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
    
    func configure(with colorCode: String,_ title: String,_ description: String?) {
        let backgroundColor = hexCodeToColor(colorCode)
        let textColor = textColor(from: colorCode)
        labelView.configure(with: backgroundColor, textColor, title)
        
        self.labelDescription.text = description
    }
    
    private func hexCodeToColor(_ hex: String) -> UIColor {
        return UIColor.black
    }
    
    private func textColor(from backgroundcolorCode: String) -> UIColor {
        return UIColor.white
    }
}
