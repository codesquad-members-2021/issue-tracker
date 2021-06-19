//
//  LabelView.swift
//  issue-tracker
//
//  Created by Song on 2021/06/14.
//

import UIKit

final class LabelView: UIView {
    
    private lazy var labelTitle: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.white
        label.textAlignment = .center
        label.text = "레이블"
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let spacing: CGFloat = 15
    
    private lazy var labelHeight: CGFloat = {
        return spacing * 2
    }()
    
    private let colorConverter = HexColorConverter()
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    private func configure() {
        layer.cornerRadius = labelHeight * 0.5
        backgroundColor = Colors.mainGrape
        translatesAutoresizingMaskIntoConstraints = false
        
        addLabelTitle()
    }
    
    private func addLabelTitle() {
        addSubview(labelTitle)
        
        NSLayoutConstraint.activate([
            labelTitle.centerXAnchor.constraint(equalTo: centerXAnchor),
            labelTitle.centerYAnchor.constraint(equalTo: centerYAnchor),
            widthAnchor.constraint(equalTo: labelTitle.widthAnchor, constant: spacing * 1.8),
            heightAnchor.constraint(equalToConstant: labelHeight)
        ])
    }
    
    func configure(with backgroundColor: UIColor,_ textColor: UIColor,_ title: String?) {
        self.backgroundColor = backgroundColor
        labelTitle.textColor = textColor
        
        if let title = title {
            labelTitle.text = title
        }
    }
    
    func configure(with hexColorCode: HexColorCode,_ title: String?) {
        let backgroundColor = colorConverter.convertHex(hexColorCode)
        let textColor = colorConverter.isColorDark(hex: hexColorCode) ? UIColor.white : UIColor.black
        configure(with: backgroundColor, textColor, title)
    }
}
