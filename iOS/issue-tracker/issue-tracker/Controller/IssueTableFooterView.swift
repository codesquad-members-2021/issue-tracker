//
//  IssueTableFooterView.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/10.
//

import UIKit
import SnapKit

class IssueTableFooterView: UIView {

    var label: UILabel = {
        var label = UILabel()
        label.text = "아래로 당기면 검색바가 보여요!👀"
        label.textColor = .lightGray
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        backgroundColor = #colorLiteral(red: 0.9489405751, green: 0.9490727782, blue: 0.9685038924, alpha: 1)
        addSubview(label)
        setupAutolayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        backgroundColor = #colorLiteral(red: 0.9489405751, green: 0.9490727782, blue: 0.9685038924, alpha: 1)
        addSubview(label)
        setupAutolayout()
    }

    func setupAutolayout() {
        label.snp.makeConstraints { label in
            label.centerX.equalToSuperview()
            label.top.equalTo(39)
        }
    }
}
