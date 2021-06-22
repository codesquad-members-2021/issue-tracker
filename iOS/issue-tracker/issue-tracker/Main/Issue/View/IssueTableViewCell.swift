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
        addlabelsStackView()
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
    
    //여기서 인자 값으로 GET으로 라벨의 갯수와 라벨 배열을 가져와야 할 것같다.
//    func addlabelsStackView(_ labels: [Label]){
    func addlabelsStackView() {
        
        issueStackView.addArrangedSubview(labelsStackView)
        labelsStackView.spacing = 4
        
        NSLayoutConstraint.activate([
            labelsStackView.leadingAnchor.constraint(equalTo: issueStackView.leadingAnchor),
            labelsStackView.trailingAnchor.constraint(equalTo: issueStackView.trailingAnchor)
        ])
        
        
        let labelView1 = LabelView()
        let colorText1 = "#34e6b1"
        let hex1 = HexColorCode(from: colorText1)
        let titleText1 = "feat"
        labelView1.configure(with: hex1, titleText1)
        labelView1.translatesAutoresizingMaskIntoConstraints = false
        
        let labelView2 = LabelView()
        let colorText2 = "#1af6c5"
        let hex2 = HexColorCode(from: colorText2)
        let titleText2 = "하이하이하이하이"
        labelView2.configure(with: hex2, titleText2)
        labelView2.translatesAutoresizingMaskIntoConstraints = false
        
        let labelView3 = LabelView()
        let colorText3 = "#3af6c5"
        let hex3 = HexColorCode(from: colorText3)
        let titleText3 = "iOSafafa"
        labelView3.configure(with: hex3, titleText3)
        labelView3.translatesAutoresizingMaskIntoConstraints = false
        
        let labelView4 = LabelView()
        let colorText4 = "#fbfbcc"
        let hex4 = HexColorCode(from: colorText4)
        let titleText4 = "abdfsfwasdfsafafasdfas"
        labelView4.configure(with: hex4, titleText4)
        labelView4.translatesAutoresizingMaskIntoConstraints = false
        
        let labelView5 = LabelView()
        let colorText5 = "#fbfbcc"
        let hex5 = HexColorCode(from: colorText5)
        let titleText5 = "abdfsfwasdfsafafasdfas"
        labelView5.configure(with: hex5, titleText5)
        labelView5.translatesAutoresizingMaskIntoConstraints = false
        
        
        labelsStackView.addArrangedSubview(labelView1)
        labelsStackView.addArrangedSubview(labelView2)
        labelsStackView.addArrangedSubview(labelView3)
//        labelsStackView.addArrangedSubview(labelView4)
//        labelsStackView.addArrangedSubview(labelView5)
                
    }
    
    func configure(title: String, mileStoneName: String, labels: [Label]) {
        titleLabel.text = title
        mileStoneTitleConfigure(mileStoneName: mileStoneName)
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
