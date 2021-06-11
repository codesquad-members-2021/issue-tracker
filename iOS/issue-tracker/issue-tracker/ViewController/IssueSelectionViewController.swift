import UIKit

class IssueSelectionViewController: UIViewController {

    @IBOutlet weak var issueTableView: UITableView!
    @IBOutlet weak var allSelectionButton: UIButton!
    @IBOutlet weak var issueCloseButton: UIButton!
    @IBOutlet weak var selectedIssueCountLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureNavigationTitle()
        configureCancelButton()
        issueTableView.register(IssueTableViewCell.nib, forCellReuseIdentifier: IssueTableViewCell.identifier)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        self.navigationItem.hidesBackButton = true
        self.tabBarController?.tabBar.isHidden = true
    }
    
    func configureNavigationTitle() {
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 34, weight: UIFont.Weight(700))]
        self.navigationItem.title = "이슈 선택"
    }
    
    func configureCancelButton() {
        let button = UIBarButtonItem(title: "취소", style: .plain, target: self, action: #selector(pressedCancelButton))
        button.setTitleTextAttributes([NSAttributedString.Key.font: UIFont.systemFont(ofSize: 17, weight: UIFont.Weight(600))], for: .normal)
        self.navigationItem.rightBarButtonItem = button
    }
    
    @objc func pressedCancelButton() {
        self.navigationController?.popViewController(animated: false)
    }
}
extension IssueSelectionViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 4
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier, for: indexPath) as? IssueTableViewCell else {
            return UITableViewCell()
        }
        
        return cell
    }
}
