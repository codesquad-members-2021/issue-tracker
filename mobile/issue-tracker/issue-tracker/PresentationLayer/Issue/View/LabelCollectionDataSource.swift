//
//  LabelCollectionDataSource.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/07.
//

import UIKit

final class LabelCollectionDataSource: NSObject, UICollectionViewDataSource {

    private var labels: [Label]

    override init() {
        self.labels = []
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return labels.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LabelCell.identifier, for: indexPath) as? LabelCell else {
            return .init()
        }
        cell.setLabel(label: labels[indexPath.row].title)
        return cell
    }

    lazy var updateLabels: (([Label]) -> Void) = { labels in
        return self.labels = labels
    }

    func bringLabel(index: Int, handler: (Label) -> Void) {
        let label = labels[index]
        handler(label)
    }
}
