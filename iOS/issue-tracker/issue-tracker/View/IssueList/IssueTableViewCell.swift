//
//  LabelTableViewCell.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import SnapKit

class IssueTableViewCell: UITableViewCell {
    
    static var identifier = "IssueTableViewCell"
    
    var largeTitle: UILabel = {
        var label = UILabel()
        label.font = UIFont.boldSystemFont(ofSize: 22)
        return label
    }()
    
    var labelDescription: UILabel = {
        var label = UILabel()
        label.textColor = .lightGray
        return label
    }()
    
    var milestoneView: MilestoneView = {
        var milestone = MilestoneView()
        return milestone
    }()
    
    var labelView: PaddingLabel = {
        var label = PaddingLabel(withInsets: 0, 0, 10, 10)
        label.textAlignment = .center
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 15
        return label
    }()
    
    var checkBoxImageView: UIImageView = {
        var imageView = UIImageView()
        imageView.image = UIImage(systemName: "checkmark.circle.fill")
        return imageView
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        addSubviews()
        setAutolayout()
        checkBoxImageView.isHidden = true
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func addSubviews() {
        addSubview(labelView)
        addSubview(labelDescription)
        addSubview(milestoneView)
        addSubview(largeTitle)
        addSubview(checkBoxImageView)
    }
    
    func setAutolayout() {
        largeTitle.snp.makeConstraints { title in
            title.top.equalTo(24)
            title.leading.trailing.equalTo(16)
            title.height.equalTo(28)
        }
        
        labelDescription.snp.makeConstraints { label in
            label.top.equalTo(largeTitle.snp.bottom).offset(16)
            label.leading.trailing.equalToSuperview().offset(16)
            label.height.equalTo(22)
        }
        
        milestoneView.snp.makeConstraints { view in
            view.top.equalTo(labelDescription.snp.bottom).offset(16)
            view.leading.trailing.equalTo(16)
            view.height.equalTo(22)
        }
        
        labelView.snp.makeConstraints { view in
            view.top.equalTo(milestoneView.snp.bottom).offset(16)
            view.leading.equalTo(16)
            view.width.greaterThanOrEqualTo(30)
            view.height.equalTo(30)
        }
        
        checkBoxImageView.snp.makeConstraints { image in
            image.top.equalToSuperview().inset(24)
            image.trailing.equalToSuperview().inset(16)
            image.width.height.equalTo(30)
        }
        
        
    }
    
    func setIssueCell(title: String, description: String, milestoneTitle: String, color: String) {
        self.largeTitle.text = title
        self.labelDescription.text = description
        self.milestoneView.setMilestoneTitle(title: milestoneTitle)
        self.labelView.backgroundColor = UIColor.hexStringToUIColor(hex: color)
        self.labelView.text = "레이블 이름"
    }
    
    func check() {
        checkBoxImageView.isHidden = false
    }
    
    func uncheck() {
        checkBoxImageView.isHidden = true
    }
}
