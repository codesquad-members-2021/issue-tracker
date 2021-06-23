//
//  LabelsCollectionViewCell.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/13.
//

import UIKit
import SnapKit

final class LabelsCollectionViewCell: UICollectionViewCell {
    static var identifiers = "LabelsCollectionViewCell"

    private let label: PaddingLabel = {
        var label = PaddingLabel(withInsets: 0, 0, 10, 10)
        label.textAlignment = .center
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 10
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubview(label)
        setupAutolayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubview(label)
        setupAutolayout()
    }

    private func setupAutolayout() {
        label.snp.makeConstraints { label in
            label.edges.equalToSuperview()
        }
    }

    func configure(title: String, color: String) {
        label.text = title
        label.backgroundColor = UIColor.hexStringToUIColor(hex: color)
        label.sizeToFit()
    }
}
