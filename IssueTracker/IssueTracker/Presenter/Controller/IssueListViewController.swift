import UIKit
import RxSwift
import RxCocoa
import NSObject_Rx

class IssueListViewController: UIViewController {

    @IBOutlet weak var issueFilterButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupIssueFilterButton()
    }
    
    private func setupIssueFilterButton() {
        issueFilterButton.rx.tap
            .subscribe(onNext: { [weak self] in
                guard let filterVC = self?.storyboard?.instantiateViewController(withIdentifier: ViewControllerID.issueFilter) else { return }
                self?.present(filterVC, animated: true, completion: nil)
            }).disposed(by: rx.disposeBag)
    }
}
