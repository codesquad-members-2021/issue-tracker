//
//  MileStoneTableViewCell.swift
//  issue-tracker
//
//  Created by jinseo park on 6/15/21.
//

import UIKit

class MileStoneTableViewCell: UITableViewCell {
    
    private let spacing: CGFloat = 16
    private lazy var mileStoneStackView: UIStackView = {
        let superStackView = UIStackView()
        superStackView.axis = .vertical
        superStackView.distribution = .fillProportionally
        superStackView.translatesAutoresizingMaskIntoConstraints = false
        superStackView.spacing = 1
        return superStackView
    }()
    
    private lazy var firstSubStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fill
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = "제목"
        label.font = UIFont.boldSystemFont(ofSize: 22)
        return label
    }()
    
    private lazy var completenessLabel: UILabel = {
        let label = UILabel()
        label.text = "100%"
        label.textColor = Colors.mileStoneSuceess
        label.font = UIFont.boldSystemFont(ofSize: 22)
        return label
    }()
    
    private lazy var descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Colors.description
        label.text = "마일스톤에 대한 설명(한 줄만 보여짐, 생략 가능)"
        label.numberOfLines = 1
        label.font = .systemFont(ofSize: 17)
        return label
    }()
    
    private lazy var dateLabel: UILabel = {
        let label = UILabel()
        return label
    }()
    
    private lazy var milestoneLabelSubStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fillEqually
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private lazy var openMilestoneLabelView: MileStoneLabelView = {
        let milestoneLabelView = MileStoneLabelView(text: "열린 이슈", fontColor: Colors.openMileStoneTint, bgColor: Colors.openMileStoneBG, imgName: "exclamationmark.circle", issueCount: 0)
        return milestoneLabelView
    }()
    
    private lazy var closeMilestoneLabelView: MileStoneLabelView = {
        let milestoneLabelView = MileStoneLabelView(text: "닫힌 이슈", fontColor: Colors.closeMileStoneTint, bgColor: Colors.closeMileStoneBG, imgName: "archivebox", issueCount: 0)
        return milestoneLabelView
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
        addMileStoneStackView()
        addMileStoneFirstStackView()
        addMileStoneSecondStackView()
        addMileStoneThirdStackView()
        addMileStoneFourthStackView()
    }
    
    private func addMileStoneStackView() {
        addSubview(mileStoneStackView)
        NSLayoutConstraint.activate([
            mileStoneStackView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            mileStoneStackView.topAnchor.constraint(equalTo: topAnchor, constant: 24),
            mileStoneStackView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -24),
            mileStoneStackView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16)
        ])        
    }
    
    func addMileStoneFirstStackView() {
        mileStoneStackView.addArrangedSubview(firstSubStackView)
        
        NSLayoutConstraint.activate([
            firstSubStackView.leadingAnchor.constraint(equalTo: mileStoneStackView.leadingAnchor),
            firstSubStackView.trailingAnchor.constraint(equalTo: mileStoneStackView.trailingAnchor)
        ])
        
        firstSubStackView
            .addArrangedSubview(titleLabel)
        firstSubStackView
            .addArrangedSubview(completenessLabel)
        
        firstSubStackView.spacing = 16
        completenessLabel.textAlignment = .right
        
        NSLayoutConstraint.activate([
            titleLabel.widthAnchor.constraint(greaterThanOrEqualTo: firstSubStackView.widthAnchor, multiplier: 0.6),
            completenessLabel.widthAnchor.constraint(equalTo: firstSubStackView.widthAnchor, multiplier: 0.2)
        ])
        
    }
    
    func addMileStoneSecondStackView() {
        mileStoneStackView.addArrangedSubview(descriptionLabel)
    }
    
    func addMileStoneThirdStackView() {
        mileStoneStackView.addArrangedSubview(dateLabel)
    }
    
    func addMileStoneFourthStackView() {
        mileStoneStackView.addArrangedSubview(milestoneLabelSubStackView)
        
        NSLayoutConstraint.activate([
            milestoneLabelSubStackView.leadingAnchor.constraint(equalTo: mileStoneStackView.leadingAnchor),
            milestoneLabelSubStackView.trailingAnchor.constraint(equalTo: mileStoneStackView.trailingAnchor)
        ])
        
        milestoneLabelSubStackView
            .addArrangedSubview(openMilestoneLabelView)
        milestoneLabelSubStackView
            .addArrangedSubview(closeMilestoneLabelView)
        
        milestoneLabelSubStackView.spacing = 4
     
    }
    
    func configure(title: String, description: String, dueDate: String) {
        titleLabel.text = title
        descriptionLabel.text = description        
        dueDateConfigure(dueDate: dueDate)
    }
    
    private func dueDateConfigure(dueDate: String) {
        let dateText = dueDate != "" ? dueDate :"완료일(생략가능)"
        let attributedString = NSMutableAttributedString(string: "")
        let imageAttachment = NSTextAttachment()
        imageAttachment.image = UIImage(systemName: "calendar")
        
        let attrs = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 18), NSAttributedString.Key.foregroundColor : Colors.description]
        let dateString = NSMutableAttributedString(string:dateText, attributes:attrs)
        
        attributedString.append(NSAttributedString(attachment: imageAttachment))
        attributedString.append(dateString)
        dateLabel.attributedText = attributedString
    }
}
