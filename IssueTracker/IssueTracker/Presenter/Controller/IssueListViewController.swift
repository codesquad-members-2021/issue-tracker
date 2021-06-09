import UIKit
import RxSwift
import RxCocoa
import NSObject_Rx

class IssueListViewController: UIViewController {

    @IBOutlet weak var issueFilterButton: UIButton!
    
    private let viewModel = IssueListViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupIssueFilterButton()
        bind()
    }
    
    private func setupIssueFilterButton() {
        issueFilterButton.rx.tap
            .subscribe(onNext: { [weak self] in
                guard let filterVC = self?.storyboard?.instantiateViewController(withIdentifier: ViewControllerID.issueFilter) else { return }
                self?.present(filterVC, animated: true, completion: nil)
            }).disposed(by: rx.disposeBag)
    }
    
    private func bind() {
        viewModel.getIssueList()
        
        let _ = viewModel.issueList
    }
}
