import UIKit

class LabelViewController: UIViewController {

    @IBOutlet weak var labelTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureNavigationTitle()
        configureAddButton()
        labelTableView.register(LabelTableViewCell.nib, forCellReuseIdentifier: LabelTableViewCell.identifier)
    }
    
    func configureNavigationTitle() {
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 34, weight: UIFont.Weight(700))]
        self.navigationItem.title = "레이블"
    }
    
    func configureAddButton() {
        let buttonImage = UIImage(systemName: "plus")
        let button = UIButton(type: .system)
        button.setImage(buttonImage, for: .normal)
        button.setTitle("추가 ", for: .normal)
        button.semanticContentAttribute = .forceRightToLeft
        button.addTarget(self, action: #selector(showNewLabelView), for: .touchUpInside)
        let selectButton = UIBarButtonItem(customView: button)
        self.navigationItem.rightBarButtonItem = selectButton
    }
    
    @objc func showNewLabelView() {
        // 레이블 추가 화면으로 전환하기
    }
}

extension LabelViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 2
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: LabelTableViewCell.identifier, for: indexPath) as? LabelTableViewCell else {
            return UITableViewCell()
        }
        return cell
    }
}
