//
//  MilestoneTableViewCell.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/09.
//

import UIKit
import SnapKit

class MilestoneTableViewCell: UITableViewCell {

    static let reuseId = "MilestoneTableViewCell"
    
    private let verticalStackView: UIStackView = {
        let stackViw = UIStackView()
        stackViw.axis = .vertical
        stackViw.alignment = .leading
        stackViw.distribution = .equalSpacing
        return stackViw
    }()
    
    private let horizenStackView: UIStackView = {
        let stackViw = UIStackView()
        stackViw.axis = .horizontal
        stackViw.alignment = .fill
        stackViw.distribution = .equalCentering
        return stackViw
    }()
    
    private let IssueLabelStackView: UIStackView = {
        let stackViw = UIStackView()
        stackViw.axis = .horizontal
        stackViw.alignment = .fill
        stackViw.distribution = .fillEqually
        return stackViw
    }()
    
    private let titleLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 22, weight: .bold)
        label.text = "마일스톤 타이틀"
        label.textAlignment = .left
        return label
    }()
    
    private let achievementLabel: UILabel = {
        let label = UILabel()
        label.text = "50%"
        label.textAlignment = .right
        return label
    }()
    
    private let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = .systemGray
        label.text = "마일스톤 설명"
        return label
    }()
    
    private let dueDateLabel: UIButton = {
        let button = UIButton()
        button.setImage(UIImage(systemName: "calendar"), for: .normal)
        button.setTitle("2021-06-21", for: .normal)
        button.setTitleColor(.secondaryLabel, for: .normal)
        return button
    }()

    private let openedIssueLabel: UIButton = {
        let button = UIButton()
        button.setImage(UIImage(systemName: "exclamationmark.circle"), for: .normal)
        button.setTitle("열린 이슈 1개", for: .normal)
        button.setTitleColor(.blue, for: .normal)
        button.titleLabel?.font = .systemFont(ofSize: 13)
        return button
    }()
    
    private let closedIssueLabel: UIButton = {
        let button = UIButton()
//        button.clipsToBounds = true
//        button.backgroundColor = .systemPurple
//        button.layer.cornerRadius = 10
        button.setImage(UIImage(systemName: "archivebox"), for: .normal)
        button.setTitle("닫힌 이슈 1개", for: .normal)
        button.setTitleColor(.purple, for: .normal)
        button.titleLabel?.font = .systemFont(ofSize: 13)
        return button
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        horizenStackView.addArrangedSubview(titleLabel)
        horizenStackView.addArrangedSubview(achievementLabel)
        
        IssueLabelStackView.addArrangedSubview(openedIssueLabel)
        IssueLabelStackView.addArrangedSubview(closedIssueLabel)
        
        verticalStackView.addArrangedSubview(horizenStackView)
        verticalStackView.addArrangedSubview(descriptionLabel)
        verticalStackView.addArrangedSubview(dueDateLabel)
        verticalStackView.addArrangedSubview(IssueLabelStackView)
        addSubview(verticalStackView)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        verticalStackView.snp.makeConstraints { (maker) in
            maker.edges.equalToSuperview().inset(20)
        }
    }
}
