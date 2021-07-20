//
//  IssueListViewDataSource.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/07.
//

import UIKit

final class IssueListCollectionDataSource: NSObject, UICollectionViewDataSource {

    private var issues: [Issue]

    override init() {
        self.issues = []
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return issues.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: IssueCell.identifier, for: indexPath) as? IssueCell else {
            return .init()
        }
        cell.setIssue(to: issues[indexPath.row])
        return cell
    }

    func updateIssues(from issueList: [Issue]) {
        self.issues = issueList
    }

    func bringIssue(index: Int, handler: (Issue) -> Void) {
        let issue = issues[index]
        handler(issue)
    }
}
