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
    
    private lazy var descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Colors.description
        label.text = "이슈에 대한 설명(최대 두 줄까지 보여줄 수 있다)"
        label.font = .systemFont(ofSize: 17)
        return label
    }()
    
    private lazy var labelsSubStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fill
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private lazy var mileStoneLabel: UILabel = {
        let label = UILabel()
        
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
        addDescriptionLabel()
        addMileStoneLabel()
        
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
    
    func addDescriptionLabel() {
        issueStackView.addArrangedSubview(descriptionLabel)
    }
    
    func addMileStoneLabel() {
        issueStackView.addArrangedSubview(mileStoneLabel)
    }
    
    func addLabelsSubStackView() {
        
    }
    
}
