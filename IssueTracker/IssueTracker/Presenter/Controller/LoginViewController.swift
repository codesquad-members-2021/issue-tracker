import UIKit
import RxSwift
import RxCocoa
import NSObject_Rx

class LoginViewController: UIViewController {

    @IBOutlet weak var logInButton: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
        setupLoginButton()
    }

    private func setupLoginButton() {
        logInButton.rx.tap
            .subscribe(onNext: { [weak self] in
                guard let issueVC = self?.storyboard?.instantiateViewController(withIdentifier: ViewControllerID.tabBar) else { return }
                issueVC.modalPresentationStyle = .fullScreen
                self?.present(issueVC, animated: true, completion: nil)
            }).disposed(by: rx.disposeBag)
    }
}

