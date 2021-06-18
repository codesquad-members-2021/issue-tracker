//
//  EstimatedLabelView.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/17.
//

import UIKit
import SnapKit

class EstimatedLabelView: UIView {

    var label: PaddingLabel = {
        var label = PaddingLabel(withInsets: 0, 0, 10, 10)
        label.text = "레이블"
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 10
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubview(label)
        self.layer.masksToBounds = true
        self.layer.cornerRadius = 10
        self.backgroundColor = #colorLiteral(red: 0.9102189541, green: 0.9093225002, blue: 0.9310914278, alpha: 1)
        configureLabelAutolayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }

    func configureLabelAutolayout() {
        label.snp.makeConstraints { label in
            label.centerX.centerY.equalToSuperview()
        }
    }

    func modifyLabelTitle(title: String) {
        self.label.text = title
        label.sizeToFit()
    }

    func setupLabelColor(color: UIColor) {
        self.label.backgroundColor = color
    }
}
