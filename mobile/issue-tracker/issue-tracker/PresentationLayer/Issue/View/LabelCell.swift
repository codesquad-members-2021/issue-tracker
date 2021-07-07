//
//  LabelCell.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class LabelCell: UICollectionViewCell {

    static var identifier: String {
        return String(describing: self)
    }

    private var issueLabel: IssueLabel = {
        var label = IssueLabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = .systemFont(ofSize: 17)
        label.layer.cornerRadius = 8
        label.clipsToBounds = true
        label.backgroundColor = .gray
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
        contentView.addSubview(issueLabel)

        issueLabel.topAnchor.constraint(equalTo: contentView.topAnchor).isActive = true
        issueLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor).isActive = true
        issueLabel.leadingAnchor.constraint(equalTo: contentView.leadingAnchor).isActive = true
        issueLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor).isActive = true
    }

    func setLabel(label: String) {
        issueLabel.text = label
    }
}
