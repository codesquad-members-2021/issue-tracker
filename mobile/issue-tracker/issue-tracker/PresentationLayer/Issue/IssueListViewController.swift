//
//  ViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {

    private var issueViewModel: IssueListProvider
    private var issueDataSourece: IssueListCollectionDataSource

    init?(coder: NSCoder, issueViewModel: IssueListProvider) {
        self.issueViewModel = issueViewModel
        self.issueDataSourece = IssueListCollectionDataSource()
        super.init(coder: coder)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    @IBOutlet weak var issueCollectionView: UICollectionView!

    override func viewDidLoad() {
        super.viewDidLoad()
        configureCollectionView()
    }

    private func configureCollectionView() {
        issueCollectionView.register(IssueCell.self, forCellWithReuseIdentifier: IssueCell.identifier)
        issueCollectionView.dataSource = issueDataSourece
        issueViewModel.fetchIssueList()
    }

    func fetchIssueList(issueList: [Issue]) {
        issueDataSourece.updateIssues(issueList)
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

extension IssueListViewController: UICollectionViewDelegateFlowLayout {

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let esitmatedHeight: CGFloat = 300

        let dummyCell = IssueCell(frame: CGRect(x: 0, y: 0, width: collectionView.frame.width, height: esitmatedHeight))
        issueDataSourece.bringIssue(index: indexPath.row) { (issue) in
            dummyCell.setIssue(to: issue)
        }
        dummyCell.layoutIfNeeded()
        let targetSize = CGSize(width: collectionView.frame.width * 0.9, height: UIView.layoutFittingCompressedSize.height)
        let dummyCellSizeFitHeight = dummyCell.contentView.systemLayoutSizeFitting(targetSize).height
        return CGSize(width: collectionView.frame.width * 0.9,
                      height: dummyCellSizeFitHeight + dummyCell.labelCollectionViewHeight)
    }
}
