import UIKit
import RxSwift
import RxCocoa
import NSObject_Rx

class FilterIssueViewController: UIViewController {

    @IBOutlet weak var cancelButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupIssueCancelButton()
    }
    
    private func setupIssueCancelButton() {
        cancelButton.rx.tap
            .subscribe(onNext: { [weak self] in
                self?.dismiss(animated: true, completion: nil)
            }).disposed(by: rx.disposeBag)
    }
}
