//
//  LabelTableViewCell.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import SnapKit
import RxSwift
import RxCocoa

final class IssueTableViewCell: UITableViewCell {

    static var identifier = "IssueTableViewCell"

    private var bag = DisposeBag()

    private var largeTitle: UILabel = {
        var label = UILabel()
        label.font = UIFont.boldSystemFont(ofSize: 22)
        return label
    }()

    private var labelDescription: UILabel = {
        var label = UILabel()
        label.textColor = .lightGray
        return label
    }()

    private var milestoneView: MilestoneView = {
        var milestone = MilestoneView()
        return milestone
    }()

    private var labelsCollectionView: LabelsCollectionView = {
        var collectionView = LabelsCollectionView()
        return collectionView
    }()

    private var checkBoxImageView: UIImageView = {
        var imageView = UIImageView()
        imageView.image = UIImage(systemName: "checkmark.circle.fill")
        return imageView
    }()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        addSubviews()
        setupAutolayout()
        checkBoxImageView.isHidden = true
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubviews()
        setupAutolayout()
        checkBoxImageView.isHidden = true
    }

    private func addSubviews() {
        addSubview(labelsCollectionView)
        addSubview(labelDescription)
        addSubview(milestoneView)
        addSubview(largeTitle)
        addSubview(checkBoxImageView)
    }

    private func setupAutolayout() {
        largeTitle.snp.makeConstraints { title in
            title.top.equalTo(24)
            title.leading.trailing.equalTo(16)
            title.height.equalTo(28)
        }

        labelDescription.snp.makeConstraints { label in
            label.top.equalTo(largeTitle.snp.bottom).offset(16)
            label.leading.trailing.equalToSuperview().inset(16)
            label.height.equalTo(22)
        }

        milestoneView.snp.makeConstraints { view in
            view.top.equalTo(labelDescription.snp.bottom).offset(16)
            view.leading.trailing.equalToSuperview().inset(16)
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

    func setupIssueCell(title: String, description: String, milestoneTitle: String, relay: BehaviorRelay<[IssueLabel]>) {
        self.largeTitle.text = title
        self.labelDescription.text = description
        self.milestoneView.setMilestoneTitle(title: milestoneTitle)
        self.bindLabelCollectionView(relay: relay)
    }

    func bindLabelCollectionView(relay: BehaviorRelay<[IssueLabel]>) {
        relay.bind(to: labelsCollectionView.rx.items(cellIdentifier: LabelsCollectionViewCell.identifiers)) { index, model, cell in
            guard let cell = UICollectionViewCell() as? LabelsCollectionViewCell else { return }
            cell.configure(title: model.title, color: model.color)
        }
        .disposed(by: bag)
    }

    func check() {
        checkBoxImageView.isHidden = false
    }

    func uncheck() {
        checkBoxImageView.isHidden = true
    }
}
