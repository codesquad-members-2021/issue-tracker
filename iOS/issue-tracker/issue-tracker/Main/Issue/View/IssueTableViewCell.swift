//
//  IssueTableViewCell.swift
//  issue-tracker
//
//  Created by jinseo park on 6/21/21.
//

import UIKit

class IssueTableViewCell: UITableViewCell {
    
    private let spacing: CGFloat = 16
    private lazy var issueStackView: UIStackView = {
        let superStackView = UIStackView()
        superStackView.axis = .vertical
        superStackView.distribution = .fillProportionally
        superStackView.translatesAutoresizingMaskIntoConstraints = false
        superStackView.spacing = 1
        return superStackView
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = "이슈 제목"
        label.font = UIFont.boldSystemFont(ofSize: 22)
        return label
    }()
    
    private lazy var labelsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fillProportionally
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private lazy var mileStoneLabel: UILabel = {
        let label = UILabel()
        
        //추후에 지울 것들.
        let attributedString = NSMutableAttributedString(string: "")
        let imageAttachment = NSTextAttachment()
        let attrs = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 13), NSAttributedString.Key.foregroundColor : UIColor.systemGray]
        let mileStoneName = NSMutableAttributedString(string:"마일스톤 이름", attributes:attrs)
        
        imageAttachment.image = UIImage(systemName: "signpost.right")
        attributedString.append(NSAttributedString(attachment: imageAttachment))
        attributedString.append(mileStoneName)
        label.attributedText = attributedString
        
        return label
    }()
    
    static var reuseID: String {
        return String(describing: self)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setViews()
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        setViews()
    }
    
    private func setViews() {
        
        addIssueStackView()
        addIssueTitleView()
        addMileStoneLabel()
//        addlabelsStackView()
    }
    
    func addIssueStackView() {
        addSubview(issueStackView)
        NSLayoutConstraint.activate([
            issueStackView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            issueStackView.topAnchor.constraint(equalTo: topAnchor, constant: 24),
            issueStackView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -24),
            issueStackView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16)
        ])
    }
    
    func addIssueTitleView() {
        issueStackView.addArrangedSubview(titleLabel)
    }
    
    func addMileStoneLabel() {
        issueStackView.addArrangedSubview(mileStoneLabel)
    }
    
    func clearLabelStackView() {
        labelsStackView.subviews.forEach { $0.removeFromSuperview() }
    }
    
    func addlabelsStackView(_ labels: [IssueLabel]) {
        //Cell의 재사용으로 계속 이 함수가 불린다. 계속 라벨이 추가되는 이슈를 막기 위해서 불릴 때마다 reset하기
        
        
        issueStackView.addArrangedSubview(labelsStackView)
        labelsStackView.spacing = 4
        
        NSLayoutConstraint.activate([
            labelsStackView.leadingAnchor.constraint(equalTo: issueStackView.leadingAnchor),
            labelsStackView.trailingAnchor.constraint(equalTo: issueStackView.trailingAnchor)
        ])
        
        labels.forEach { label in
            let labelView = LabelView()
            let colorText = label.colorCode
            let hex = HexColorCode(from: colorText)
            let titleText = label.name
            labelView.configure(with: hex, titleText)
            labelView.translatesAutoresizingMaskIntoConstraints = false
            labelsStackView.addArrangedSubview(labelView)
        }
    }
    
    func configure(title: String, mileStoneName: String, labels: [IssueLabel]) {
        titleLabel.text = title
        mileStoneTitleConfigure(mileStoneName: mileStoneName)
        clearLabelStackView()
        addlabelsStackView(labels)
    }
    
    private func mileStoneTitleConfigure(mileStoneName: String) {
        let mileStoneText = mileStoneName != "" ? mileStoneName :"마일스톤 이름"
        let attributedString = NSMutableAttributedString(string: "")
        let imageAttachment = NSTextAttachment()
        imageAttachment.image = UIImage(systemName: "signpost.right")
        
        let attrs = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 13), NSAttributedString.Key.foregroundColor : Colors.description]
        let dateString = NSMutableAttributedString(string:mileStoneText, attributes:attrs)
        
        attributedString.append(NSAttributedString(attachment: imageAttachment))
        attributedString.append(dateString)
        mileStoneLabel.attributedText = attributedString
    }
    
}
