//
//  LabelsCollectionView.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/13.
//

import UIKit

final class LabelsCollectionView: UICollectionView {

    private var labelsLayout: UICollectionViewFlowLayout = {
        var layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .vertical
        layout.estimatedItemSize = CGSize(width: 60, height: 20)
        layout.minimumLineSpacing = 10
        layout.minimumInteritemSpacing = 10
        return layout
    }()

    override init(frame: CGRect, collectionViewLayout layout: UICollectionViewLayout) {
        super.init(frame: frame, collectionViewLayout: labelsLayout)
        register(LabelsCollectionViewCell.self, forCellWithReuseIdentifier: LabelsCollectionViewCell.identifiers)
        isScrollEnabled = false
        backgroundColor = .white
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
}
