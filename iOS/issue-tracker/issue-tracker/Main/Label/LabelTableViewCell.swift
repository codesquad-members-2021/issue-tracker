//
//  LabelTableViewCell.swift
//  issue-tracker
//
//  Created by Song on 2021/06/14.
//

import UIKit

class LabelTableViewCell: UITableViewCell {

    private lazy var labelTitleView: UIView = {
        let view = UIView()
        view.layer.cornerRadius = labelHeight * 0.5
        view.backgroundColor = Colors.mainGrape
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private lazy var labelTitle: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.white
        label.textAlignment = .center
        label.text = "레이블"
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
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
    
    private lazy var labelHeight: CGFloat = {
        return spacing * 2
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
        configureLabelTitleView()
        addSubview(labelTitleView)
        
        NSLayoutConstraint.activate([
            labelTitleView.widthAnchor.constraint(equalTo: labelTitle.widthAnchor, constant: spacing * 1.8),
            labelTitleView.heightAnchor.constraint(equalToConstant: labelHeight),
            labelTitleView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: spacing),
            labelTitleView.topAnchor.constraint(equalTo: topAnchor, constant: spacing * 1.5)
        ])
    }
    
    private func configureLabelTitleView() {
        labelTitleView.addSubview(labelTitle)
        
        NSLayoutConstraint.activate([
            labelTitle.centerXAnchor.constraint(equalTo: labelTitleView.centerXAnchor),
            labelTitle.centerYAnchor.constraint(equalTo: labelTitleView.centerYAnchor)
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
        self.labelTitleView.backgroundColor = hexCodeToColor(colorCode)
        self.labelTitle.text = title
        self.labelTitle.textColor = textColor(from: colorCode)
        self.labelDescription.text = description
    }
    
    private func hexCodeToColor(_ hex: String) -> UIColor {
        return UIColor.black
    }
    
    private func textColor(from backgroundcolorCode: String) -> UIColor {
        return UIColor.white
    }
    
}
