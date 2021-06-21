import UIKit

class IssueAdditionViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        self.navigationController?.navigationBar.isHidden = true
    }
    
    @IBAction func pressedCancelButton(_ sender: Any) {
        self.navigationController?.popViewController(animated: false)
    }
    
}

extension IssueAdditionViewController: Identifying { }
