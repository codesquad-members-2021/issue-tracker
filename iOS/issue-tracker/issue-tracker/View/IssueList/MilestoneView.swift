//
//  MilestoneView.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/10.
//

import UIKit
import SnapKit

final class MilestoneView: UIView {
    private var sfsymbolImageView: UIImageView = {
       var imageView = UIImageView()
        imageView.image = UIImage(named: "vector")
        return imageView
    }()

    private var milestoneTitle: UILabel = {
        var label = UILabel()
        label.textColor = .lightGray
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubviews()
        setupAutolayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubviews()
        setupAutolayout()
    }

    private func addSubviews() {
        addSubview(sfsymbolImageView)
        addSubview(milestoneTitle)
    }

    private func setupAutolayout() {
        sfsymbolImageView.snp.makeConstraints { imageView in
            imageView.top.leading.bottom.equalToSuperview()
            imageView.width.equalTo(sfsymbolImageView.snp.height).multipliedBy(1)
        }
        milestoneTitle.snp.makeConstraints { label in
            label.top.bottom.equalToSuperview()
            label.leading.equalTo(sfsymbolImageView.snp.trailing).offset(4)
            label.width.greaterThanOrEqualTo(30)
        }
    }

    func setMilestoneTitle(title: String) {
        self.milestoneTitle.text = title
    }
}
