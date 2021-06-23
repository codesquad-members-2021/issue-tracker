//
//  SimpleMilestoneTableViewCell.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class SimpleMilestoneTableViewCell: UITableViewCell {

    private lazy var titleLabel = UILabel()
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
        titleLabel.translatesAutoresizingMaskIntoConstraints = false 
        addSubview(titleLabel)
        
        NSLayoutConstraint.activate([
            titleLabel.centerYAnchor.constraint(equalTo: centerYAnchor),
            titleLabel.leadingAnchor.constraint(equalTo: leadingAnchor, constant: spacing),
            titleLabel.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -spacing * 2)
        ])
    }
    
    static func update(cell: SimpleMilestoneTableViewCell, with milestone: MileStone) -> SimpleMilestoneTableViewCell {
        let title = milestone.title
        cell.titleLabel.text = title
        return cell
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        accessoryType = selected ? .checkmark : .none
    }
}
