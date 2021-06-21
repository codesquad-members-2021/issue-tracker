//
//  IssueDetailTableViewCell.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/12.
//

import UIKit
import SnapKit

class IssueDetailTableViewCell: UITableViewCell {

    private let horizenStackView: UIStackView = {
        let stackViw = UIStackView()
        stackViw.axis = .horizontal
        stackViw.alignment = .top
        stackViw.distribution = .fillProportionally
        stackViw.spacing = 10
        return stackViw
    }()

    private let verticalStackView: UIStackView = {
        let stackViw = UIStackView()
        stackViw.axis = .vertical
        stackViw.alignment = .leading
        stackViw.distribution = .fill
        return stackViw
    }()

    private let profile: UIImageView = {
        let imageView = UIImageView()
        imageView.image = UIImage(systemName: "bell")
        imageView.contentMode = .scaleAspectFit
        imageView.layer.masksToBounds = true
        imageView.layer.cornerRadius = imageView.frame.width / 2
        return imageView
    }()

    private let author: UILabel = {
        let label = UILabel()
        label.text = "Oni"
        label.textColor = .label
        return label
    }()

    private let timestamp: UILabel = {
        let label = UILabel()
        label.text = "1분 전"
        label.textColor = .label
        label.font = .systemFont(ofSize: 14)
        return label
    }()

    private let comment: UILabel = {
        let label = UILabel()
        label.numberOfLines = 0
        label.text = "마크다운이 어떻게 보여지는지 확인합니다."
        label.textColor = .label
        return label
    }()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        self.selectionStyle = .gray
        verticalStackView.addArrangedSubview(author)
        verticalStackView.addArrangedSubview(timestamp)
        verticalStackView.addArrangedSubview(comment)
        horizenStackView.addArrangedSubview(profile)
        horizenStackView.addArrangedSubview(verticalStackView)
        contentView.addSubview(horizenStackView)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        profile.snp.makeConstraints { maker in
            maker.width.height.equalTo(44)
        }
        horizenStackView.snp.makeConstraints { maker in
            maker.leading.trailing.top.bottom.equalToSuperview().inset(20)
        }
    }
}
