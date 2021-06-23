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

    var stackView: UIStackView = {
        var stackView = UIStackView()
        stackView.alignment = .leading
        stackView.axis = .vertical
        stackView.distribution = .fill
        stackView.spacing = 16
        return stackView
    }()

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

    private var checkBoxImageView: UIImageView = {
        var imageView = UIImageView()
        imageView.image = UIImage(systemName: "checkmark.circle.fill")
        return imageView
    }()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        setUpStackView()
        addSubviews()
        setupAutolayout()
        checkBoxImageView.isHidden = true
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setUpStackView()
        addSubviews()
        setupAutolayout()
        checkBoxImageView.isHidden = true
    }

    private func addSubviews() {
        contentView.addSubview(stackView)
        contentView.addSubview(checkBoxImageView)
    }

    private func setUpStackView() {
        stackView.addArrangedSubview(largeTitle)
        stackView.addArrangedSubview(labelDescription)
        stackView.addArrangedSubview(milestoneView)
    }

    private func setupAutolayout() {
        stackView.snp.makeConstraints { view in
            view.top.equalToSuperview().inset(24)
            view.leading.equalToSuperview().inset(16)
            view.trailing.equalToSuperview().inset(200)
        }
    }

    func setUpCollectionView(view: UICollectionView) {
        self.stackView.addArrangedSubview(view)
        view.snp.makeConstraints { view in
            view.width.equalToSuperview()
            view.height.equalTo(25)
        }
    }

    func setupIssueCell(title: String?, description: String?, milestoneTitle: String?, relay: Observable<BehaviorRelay<[IssueLabel]>>) {
        if let title = title {
            self.largeTitle.text = title
            largeTitle.sizeToFit()
        } else {
            largeTitle.isHidden = true
        }
        if let description = description {
            self.labelDescription.text = description
            labelDescription.sizeToFit()
        } else {
            labelDescription.isHidden = true
        }
        if let milestone = milestoneTitle {
            self.milestoneView.setMilestoneTitle(title: milestone)
            milestoneView.sizeToFit()
        } else {
            milestoneView.isHidden = true
        }
        self.bindLabelCollectionView(relay: relay)
    }

    func bindLabelCollectionView(relay: Observable<BehaviorRelay<[IssueLabel]>>) {
        let labelsCollectionView = LabelsCollectionView(frame: CGRect(x: 0, y: 0, width: contentView.frame.width, height: 100))
        self.setUpCollectionView(view: labelsCollectionView)
        relay.subscribe { behaviorRelay in
            behaviorRelay.bind(to: labelsCollectionView.rx.items) { collectionView, int, issueLabel in
                guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LabelsCollectionViewCell.identifiers, for: IndexPath(row: int, section: 0  )) as? LabelsCollectionViewCell else { return UICollectionViewCell() }
                cell.configure(title: issueLabel.title, color: issueLabel.color)
                return cell
            }
        } onCompleted: {
            self.layoutIfNeeded()
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
