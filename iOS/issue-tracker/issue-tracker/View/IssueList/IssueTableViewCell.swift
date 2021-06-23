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
        stackView.spacing = 10
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

    var labelsCollectionView = LabelsCollectionView()

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

    override func layoutSubviews() {
        super.layoutSubviews()
        contentView.frame = contentView.frame.inset(by: UIEdgeInsets(top: 10, left: 2, bottom: 0, right: 2))
        contentView.layer.cornerRadius = 20
        contentView.layer.borderWidth = 2
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
        contentView.backgroundColor = .systemYellow
    }

    private func setUpStackView() {
        stackView.addArrangedSubview(largeTitle)
        stackView.addArrangedSubview(labelDescription)
        stackView.addArrangedSubview(milestoneView)
        stackView.addArrangedSubview(labelsCollectionView)
    }

    private func setupAutolayout() {
        stackView.snp.makeConstraints { view in
            view.edges.equalToSuperview().inset(10)
        }

        checkBoxImageView.snp.makeConstraints { image in
            image.top.equalToSuperview().inset(24)
            image.trailing.equalToSuperview().inset(16)
            image.width.height.equalTo(30)
        }
    }

    func setUpCollectionViewAutoLayout(view: UICollectionView) {
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
        labelsCollectionView.dataSource = nil
        self.setUpCollectionViewAutoLayout(view: labelsCollectionView)
        relay.subscribe { behaviorRelay in
            behaviorRelay.bind(to: self.labelsCollectionView.rx.items) { collectionView, int, issueLabel in
                guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LabelsCollectionViewCell.identifiers, for: IndexPath(row: int, section: 0  )) as? LabelsCollectionViewCell else { return UICollectionViewCell() }
                cell.configure(title: issueLabel.title, color: issueLabel.color)
                return cell
            }
        } onCompleted: {
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
