//
//  IssueCell.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class IssueCell: UICollectionViewCell {

    static var identifier: String {
        return String(describing: self)
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }

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
        imageView.tintColor = .gray
        return imageView
    }()

    private var milestoneLable: UILabel = {
        var milestoneName = UILabel()
        milestoneName.translatesAutoresizingMaskIntoConstraints = false
        milestoneName.font = .systemFont(ofSize: 17)
        return milestoneName
    }()

    private var labelCollectionView: UICollectionView = {
        var leftAlignFlowLayout = LeftAlignCollectionFlowLayout()
        leftAlignFlowLayout.estimatedItemSize = .zero
        var collectionView = UICollectionView(frame: .zero, collectionViewLayout: leftAlignFlowLayout)
        collectionView.backgroundColor = .systemBackground
        collectionView.register(LabelCell.self, forCellWithReuseIdentifier: LabelCell.identifier)
        return collectionView
    }()

    private func configureUI() {
        contentView.addSubview(issueStackView)
        issueStackView.addArrangedSubview(titleLable)
        issueStackView.addArrangedSubview(contentLabel)
        issueStackView.addArrangedSubview(milestoneStackView)
        milestoneStackView.addArrangedSubview(milestoneImage)
        milestoneStackView.addArrangedSubview(milestoneLable)
        issueStackView.addArrangedSubview(labelCollectionView)

        labelCollectionView.delegate = self
        labelCollectionView.dataSource = self

        issueStackView.topAnchor.constraint(equalTo: contentView.topAnchor).isActive = true
        issueStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor).isActive = true
        issueStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor).isActive = true
        issueStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor).isActive = true
    }

    func setIssue(to issue: Issue) {
        titleLable.text = issue.title
        contentLabel.text = issue.content
        milestoneLable.text = issue.milestoneInfo.title
        updateCollectionView(labels: issue.labels.labels)
    }

    var tempLabels: [Label] = []

    private func updateCollectionView(labels: [Label]) {
        tempLabels = labels
        DispatchQueue.main.async { [weak self] in
            self?.labelCollectionView.reloadData()
        }
    }

    var labelCollectionViewHeight: CGFloat {
        return labelCollectionView
            .collectionViewLayout
            .collectionViewContentSize
            .height
    }
}

extension IssueCell: UICollectionViewDelegateFlowLayout, UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return tempLabels.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LabelCell.identifier, for: indexPath) as? LabelCell else {
            return .init()
        }
        cell.setLabel(label: tempLabels[indexPath.row].title)
        return cell
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let tagSize = LabelCell()
        tagSize.setLabel(label: tempLabels[indexPath.row].title)
        tagSize.layoutIfNeeded()
        let targetSize = CGSize(width: UIView.layoutFittingCompressedSize.width, height: UIView.layoutFittingCompressedSize.height)
        let estimatedSize = tagSize.contentView.systemLayoutSizeFitting(targetSize)
        return CGSize(width: estimatedSize.width,
                      height: estimatedSize.height)
    }
}
