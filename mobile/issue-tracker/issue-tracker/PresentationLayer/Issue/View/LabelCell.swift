//
//  LabelCell.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class LabelCell: UICollectionViewCell {

    private var issueLabel: UILabel = {
        var label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = .systemFont(ofSize: 17)
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }

    func configure() {
        addSubview(issueLabel)

        issueLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor).isActive = true
        issueLabel.centerYAnchor.constraint(equalTo: contentView.centerYAnchor).isActive = true
    }

    func setLabel(label: String) {
        issueLabel.text = label
    }
}
