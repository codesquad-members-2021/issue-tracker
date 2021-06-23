//
//  SimpleLabelTableViewCell.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

class SimpleLabelTableViewCell: UITableViewCell {

    private lazy var labelView = LabelView()
    private let spacing: CGFloat = 15
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        configure()
    }
    
    private func configure() {
        selectionStyle = .none
        addLabelView()
    }

    private func addLabelView() {
        addSubview(labelView)
        
        NSLayoutConstraint.activate([
            labelView.centerYAnchor.constraint(equalTo: centerYAnchor),
            labelView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: spacing)
        ])
    }
    
    func configure(with hexColorCode: HexColorCode, title: String) {
        labelView.configure(with: hexColorCode, title)
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        accessoryType = selected ? .checkmark : .none
    }
}
