import UIKit
import RxSwift
import RxCocoa
import NSObject_Rx

class IssueListViewController: UIViewController {

    @IBOutlet weak var issueCollectionView: UICollectionView!
    @IBOutlet weak var issueFilterButton: UIButton!
    
    private let viewModel = IssueListViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupIssueFilterButton()
        setupDelegate()
        bind()
    }
}

private extension IssueListViewController {
    
    private func setupIssueFilterButton() {
        issueFilterButton.rx.tap
            .subscribe(onNext: { [weak self] in
                guard let filterVC = self?.storyboard?.instantiateViewController(withIdentifier: ViewControllerID.issueFilter) else { return }
                self?.present(filterVC, animated: true, completion: nil)
            }).disposed(by: rx.disposeBag)
    }
    
    private func setupDelegate() {
        issueCollectionView.rx.setDelegate(self).disposed(by: rx.disposeBag)
    }
}

private extension IssueListViewController {
    
    private func bind() {
        viewModel.getIssueList()
        
        viewModel.issueList
            .drive(issueCollectionView.rx.items(cellIdentifier: IssueCell.identifier, cellType: IssueCell.self)) { _, issue, cell in
                cell.configure(issue.title, issue.comment, milestone: issue.milestone, labels: issue.labels)
            }.disposed(by: rx.disposeBag)
    }
}

extension IssueListViewController: UICollectionViewDelegateFlowLayout {
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let width = issueCollectionView.frame.width * 0.8
        let height = issueCollectionView.frame.height * 0.3
        return CGSize(width: width, height: height)
    }
}
