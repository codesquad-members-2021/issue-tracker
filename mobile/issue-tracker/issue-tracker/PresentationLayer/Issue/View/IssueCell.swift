//
//  IssueCell.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class IssueCell: UICollectionViewCell {

    private var issueStackView: UIStackView = {
       var stack = UIStackView()
        stack.translatesAutoresizingMaskIntoConstraints = false
        stack.alignment = .fill
        stack.distribution = .fill
        stack.axis = .vertical
        stack.spacing = 16
        return stack
    }()

    private var titleLable: UILabel = {
        var title = UILabel()
        title.translatesAutoresizingMaskIntoConstraints = false
        title.font = .boldSystemFont(ofSize: 22)
        return title
    }()

    private var contentLabel: UILabel = {
        var content = UILabel()
        content.translatesAutoresizingMaskIntoConstraints = false
        content.font = .systemFont(ofSize: 17)
        content.numberOfLines = 2
        return content
    }()

    private var milestoneStackView: UIStackView = {
        var stack = UIStackView()
        stack.translatesAutoresizingMaskIntoConstraints = false
        stack.alignment = .fill
        stack.distribution = .fillProportionally
        stack.axis = .horizontal
        stack.spacing = 8
        return stack
    }()

    private var milestoneImage: UIImageView = {
        var image = UIImage(systemName: "signpost.right") ?? UIImage()
        var imageView = UIImageView(image: image)
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.heightAnchor.constraint(equalToConstant: 17).isActive = true
        imageView.widthAnchor.constraint(equalToConstant: 17).isActive = true
        return imageView
    }()

    private var milestoneLable: UILabel = {
        var milestoneName = UILabel()
        milestoneName.translatesAutoresizingMaskIntoConstraints = false
        milestoneName.font = .systemFont(ofSize: 17)
        return milestoneName
    }()

    var labelCollectionView: UICollectionView = {
        var collectionView = UICollectionView(frame: .zero, collectionViewLayout: .init())
        return collectionView
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }

    func configureUI() {
        addSubview(issueStackView)
        issueStackView.addArrangedSubview(titleLable)
        issueStackView.addArrangedSubview(contentLabel)
        issueStackView.addArrangedSubview(milestoneStackView)
        milestoneStackView.addArrangedSubview(milestoneImage)
        milestoneStackView.addArrangedSubview(milestoneLable)
        issueStackView.addArrangedSubview(labelCollectionView)

        issueStackView.topAnchor.constraint(equalTo: contentView.topAnchor).isActive = true
        issueStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor).isActive = true
        issueStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor).isActive = true
        issueStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor).isActive = true
    }

    func setIssue(to issue: Issue) {
        titleLable.text = issue.title
        contentLabel.text = issue.content
        milestoneLable.text = issue.milestoneInfo.title
    }
}
