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
        let stackView = UIStackView()
        stackView.spacing = 10
        stackView.axis = .vertical
        stackView.alignment = .fill
        stackView.distribution = .fillEqually
        return stackView
    }()
    
    private let horizenStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .top
        stackView.distribution = .fill
        return stackView
    }()
    
    private let IssueLabelStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.spacing = 5
        stackView.axis = .horizontal
        stackView.alignment = .fill
        stackView.distribution = .fillEqually
        return stackView
    }()
    
    private let titleLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 22, weight: .bold)
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
        label.font = .systemFont(ofSize: 17)
        label.textColor = .systemGray
        return label
    }()
    
    private let dueDateLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 17)
        label.textColor = .systemGray
        return label
    }()

    private let openedIssue: PaddingLabel = {
        let label = PaddingLabel(withInsets: 5, 5, 10, 10)
        label.textAlignment = .center
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 15
        label.backgroundColor = UIColor.hexStringToUIColor(hex: "#B1CAE5")
        return label
    }()
    
    private let closedIssue: PaddingLabel = {
        let label = PaddingLabel(withInsets: 5, 5, 10, 10)
        label.textAlignment = .center
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 15
        label.backgroundColor = UIColor.hexStringToUIColor(hex: "#DFCD85")
        return label
    }()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        IssueLabelStackView.addArrangedSubview(openedIssue)
        IssueLabelStackView.addArrangedSubview(closedIssue)
        
        verticalStackView.addArrangedSubview(titleLabel)
        verticalStackView.addArrangedSubview(descriptionLabel)
        verticalStackView.addArrangedSubview(dueDateLabel)
        verticalStackView.addArrangedSubview(IssueLabelStackView)
        
        horizenStackView.addArrangedSubview(verticalStackView)
        horizenStackView.addArrangedSubview(achievementLabel)
        addSubview(horizenStackView)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        IssueLabelStackView.addArrangedSubview(openedIssue)
        IssueLabelStackView.addArrangedSubview(closedIssue)
        
        verticalStackView.addArrangedSubview(titleLabel)
        verticalStackView.addArrangedSubview(descriptionLabel)
        verticalStackView.addArrangedSubview(dueDateLabel)
        verticalStackView.addArrangedSubview(IssueLabelStackView)
        
        horizenStackView.addArrangedSubview(verticalStackView)
        horizenStackView.addArrangedSubview(achievementLabel)
        addSubview(horizenStackView)
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        horizenStackView.snp.makeConstraints { (maker) in
            maker.edges.equalToSuperview().inset(20)
        }
    }
    
    func configure(with milestone: Milestone) {
        titleLabel.text = milestone.title
        descriptionLabel.text = milestone.description
        dueDateLabel.text = milestone.dueDate
        if let open = milestone.openedIssueCount {
            openedIssue.text = "열린 이슈 \(open)개"
        }
        if let close = milestone.closedIssueCount {
            closedIssue.text = "닫힌 이슈 \(close)개"
        }
    }
}
