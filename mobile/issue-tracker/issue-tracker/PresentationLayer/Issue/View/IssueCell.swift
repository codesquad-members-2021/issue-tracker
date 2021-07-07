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

    private var labelDataSource: LabelCollectionDataSource

    override init(frame: CGRect) {
        labelDataSource = LabelCollectionDataSource()
        super.init(frame: frame)
        configureUI()
    }

    required init?(coder: NSCoder) {
        labelDataSource = LabelCollectionDataSource()
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

    private lazy var milestoneStackView: UIStackView = {
        var stack = UIStackView(arrangedSubviews: [self.milestoneImage, self.milestoneLable] )
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
        issueStackView.addArrangedSubview(labelCollectionView)

        labelCollectionView.delegate = self
        labelCollectionView.dataSource = labelDataSource

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

    private func updateCollectionView(labels: [Label]) {
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
            tagSize.setLabel(label: label.title)
        }
        tagSize.layoutIfNeeded()
        let targetSize = CGSize(width: UIView.layoutFittingCompressedSize.width, height: UIView.layoutFittingCompressedSize.height)
        let estimatedSize = tagSize.contentView.systemLayoutSizeFitting(targetSize)
        return CGSize(width: estimatedSize.width,
                      height: estimatedSize.height)
    }
}
