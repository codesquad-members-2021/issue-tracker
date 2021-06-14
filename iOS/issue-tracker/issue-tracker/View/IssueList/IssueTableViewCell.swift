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
    
    var fakeData = [IssueLabels(title: "gdsfaewqeqwrqw2ewqweq", color: "#DFCD85"), IssueLabels(title: "gdsfa", color: "#DFCD85"), IssueLabels(title: "gdsfa", color: "#DFCD85"), IssueLabels(title: "gdsfaewqeqwrqw2ewqweq", color: "#DFCD85"), IssueLabels(title: "gdsfaewqeqwrqw2ewqweq", color: "#DFCD85")]
    
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
    
    var labelsCollectionView: LabelsCollectionView = {
        var collectionView = LabelsCollectionView()
        return collectionView
    }()
    
    var checkBoxImageView: UIImageView = {
        var imageView = UIImageView()
        imageView.image = UIImage(systemName: "checkmark.circle.fill")
        return imageView
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        labelsCollectionView.dataSource = self
        addSubviews()
        setAutolayout()
        checkBoxImageView.isHidden = true
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func addSubviews() {
        addSubview(labelsCollectionView)
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
        
        labelsCollectionView.snp.makeConstraints { view in
            view.top.equalTo(milestoneView.snp.bottom).offset(16)
            view.leading.trailing.equalToSuperview().inset(16)
            view.bottom.equalToSuperview()
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
    }
    
    func check() {
        checkBoxImageView.isHidden = false
    }
    
    func uncheck() {
        checkBoxImageView.isHidden = true
    }
}

extension IssueTableViewCell: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return fakeData.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LabelsCollectionViewCell.identifiers, for: indexPath) as? LabelsCollectionViewCell else { return UICollectionViewCell() }
        cell.configure(title: fakeData[indexPath.item].title, color: fakeData[indexPath.item].color)
        return cell
    }
    
    
}

struct IssueLabels {
    var title: String
    var color: String
}
