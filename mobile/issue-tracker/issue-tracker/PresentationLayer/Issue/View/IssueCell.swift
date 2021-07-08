//
//  IssueCell.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class IssueCell: UICollectionViewCell {

    private var labelDataSource: LabelCollectionDataSource

    override init(frame: CGRect) {
        labelDataSource = LabelCollectionDataSource()
        super.init(frame: frame)
        configureUI()
        configureShadow()
    }

    required init?(coder: NSCoder) {
        labelDataSource = LabelCollectionDataSource()
        super.init(coder: coder)
        configureUI()
        configureShadow()
    }

    private var issueStackView: UIStackView = {
       var stack = UIStackView()
        stack.translatesAutoresizingMaskIntoConstraints = false
        stack.alignment = .fill
        stack.distribution = .fill
        stack.axis = .vertical
        stack.spacing = 7
        return stack
    }()

    private var titleLable: UILabel = {
        var title = UILabel()
        title.translatesAutoresizingMaskIntoConstraints = false
        title.font = .boldSystemFont(ofSize: 20)
        return title
    }()

    private var contentLabel: UILabel = {
        var content = UILabel()
        content.translatesAutoresizingMaskIntoConstraints = false
        content.font = .systemFont(ofSize: 17)
        content.numberOfLines = 2
        return content
    }()

    private lazy var milestoneStackView: UIStackView = {
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
        milestoneName.font = .systemFont(ofSize: 15)
        return milestoneName
    }()

    private var labelCollectionView: UICollectionView = {
        var leftAlignFlowLayout = LeftAlignCollectionFlowLayout()
        leftAlignFlowLayout.estimatedItemSize = .zero
        var collectionView = UICollectionView(frame: .zero, collectionViewLayout: leftAlignFlowLayout)
        collectionView.backgroundColor = .clear
        collectionView.register(LabelCell.self, forCellWithReuseIdentifier: LabelCell.identifier)
        return collectionView
    }()

    private func configureUI() {
        contentView.addSubview(issueStackView)
        issueStackView.addArrangedSubview(titleLable)
        issueStackView.addArrangedSubview(contentLabel)
        issueStackView.addArrangedSubview(milestoneStackView)
        issueStackView.addArrangedSubview(labelCollectionView)

        labelCollectionView.delegate = self
        labelCollectionView.dataSource = labelDataSource

        issueStackView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 10).isActive = true
        issueStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 6).isActive = true
        issueStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -6 ).isActive = true
        issueStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -10).isActive = true
    }

    private func configureShadow() {
        layer.backgroundColor = UIColor.systemBackground.cgColor
        layer.cornerRadius = 8
        layer.shadowColor = UIColor.black.cgColor
        layer.shadowOffset = CGSize(width: 0, height: 1.0)
        layer.shadowOpacity = 0.2
        layer.shadowRadius = 4.0
        layer.shadowPath = UIBezierPath(roundedRect: contentView.bounds, cornerRadius: layer.cornerRadius).cgPath
    }

    func setIssue(to issue: Issue) {
        titleLable.text = issue.title
        contentLabel.text = issue.content
        showMileStone(with: issue.milestoneInfo)
        updateCollectionView(labels: issue.labels)
    }

    private func showMileStone(with milestone: MilestoneInfo?) {
        guard let milestone = milestone else {
            milestoneStackView.isHidden = true
            return
        }
        milestoneStackView.addArrangedSubview(milestoneImage)
        milestoneStackView.addArrangedSubview(milestoneLable)
        milestoneLable.text = milestone.title
    }

    private func updateCollectionView(labels: [Label]) {
        if labels.isEmpty {
            labelCollectionView.isHidden = true
            return
        }
        labelDataSource.updateLabels(labels)
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

extension IssueCell: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let tagSize = LabelCell()
        labelDataSource.bringLabel(index: indexPath.row) { (label) in
            tagSize.setLabel(with: label)
        }
        tagSize.layoutIfNeeded()
        let targetSize = CGSize(width: UIView.layoutFittingCompressedSize.width, height: UIView.layoutFittingCompressedSize.height)
        let estimatedSize = tagSize.contentView.systemLayoutSizeFitting(targetSize)
        return CGSize(width: estimatedSize.width,
                      height: estimatedSize.height)
    }
}
