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
        label.font = .systemFont(ofSize: 17)
        label.textColor = .systemGray
        label.text = "마일스톤 설명"
        return label
    }()
    
    private let dueDateLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 17)
        label.textColor = .systemGray
        label.text = "2021-06-21"
        return label
    }()

    private let openedIssue: PaddingLabel = {
        let label = PaddingLabel(withInsets: 5, 5, 10, 10)
        label.textAlignment = .center
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 15
        label.text = "Opend Issue 1개"
        label.backgroundColor = UIColor.hexStringToUIColor(hex: "#B1CAE5")
        return label
    }()
    
    private let closedIssue: PaddingLabel = {
        let label = PaddingLabel(withInsets: 5, 5, 10, 10)
        label.textAlignment = .center
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 15
        label.text = "Closed Issue 1개"
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
        fatalError("init(coder:) has not been implemented")
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        horizenStackView.snp.makeConstraints { (maker) in
            maker.edges.equalToSuperview().inset(20)
        }
    }
}
