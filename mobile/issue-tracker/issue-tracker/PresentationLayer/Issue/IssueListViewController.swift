//
//  ViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {

    private var issueViewModel: IssueListProvider
    private var issues: [Issue] = []

    init?(coder: NSCoder, issueViewModel: IssueListProvider) {
        self.issueViewModel = issueViewModel
        super.init(coder: coder)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    @IBOutlet weak var issueCollectionView: UICollectionView!

    override func viewDidLoad() {
        super.viewDidLoad()
        issueCollectionView.register(IssueCell.self, forCellWithReuseIdentifier: IssueCell.identifier)

        issueViewModel.fetchIssueList()
    }

    func fetchIssueList(issueList: [Issue]) {
        issues = issueList
        DispatchQueue.main.async { [weak self] in
            self?.issueCollectionView.reloadData()
        }
    }

    func showError(from error: NetworkError) {
        DispatchQueue.main.async {
            let alertController = UIAlertController(title: error.description)
            self.present(alertController, animated: true)
        }
    }

    @IBAction func addIssue(_ sender: UIButton) {
    }

}

extension IssueListViewController: UICollectionViewDelegateFlowLayout, UICollectionViewDataSource {
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

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let esitmatedHeight: CGFloat = 300

        let dummyCell = IssueCell(frame: CGRect(x: 0, y: 0, width: collectionView.frame.width, height: esitmatedHeight))
        dummyCell.setIssue(to: issues[indexPath.row])
        dummyCell.layoutIfNeeded()

        let targetSize = CGSize(width: collectionView.frame.width * 0.9, height: UIView.layoutFittingCompressedSize.height)
        let height = dummyCell.contentView.systemLayoutSizeFitting(targetSize).height

        return CGSize(width: collectionView.frame.width * 0.9, height: height)
    }
}
