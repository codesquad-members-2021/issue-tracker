import UIKit

class IssueListViewController: UIViewController {

    @IBOutlet weak var issueTableView: UITableView!
    
    //MARK: - NavigationController Property
    private lazy var searchController: UISearchController = {
        let searchController = UISearchController()
        searchController.searchBar.placeholder = "Search"
//        searchController.hidesNavigationBarDuringPresentation = false
        return searchController
    }()
    
    private lazy var selectButton: UIBarButtonItem = {
        let buttonImage = UIImage(systemName: "checkmark.circle")
        let button = UIButton(type: .system)
        button.setImage(buttonImage, for: .normal)
        button.setTitle("선택 ", for: .normal)
        button.semanticContentAttribute = .forceRightToLeft
        let selectButton = UIBarButtonItem(customView: button)
        return selectButton
    }()

    private lazy var filterButton: UIBarButtonItem = {
        let buttonImage = UIImage(systemName: "line.horizontal.3.decrease")
        let button = UIButton(type: .system)
        button.setImage(buttonImage, for: .normal)
        button.setTitle(" 필터", for: .normal)
        let filterButton = UIBarButtonItem(customView: button)
        return filterButton
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        issueTableView.register(IssueTableViewCell.nib, forCellReuseIdentifier: IssueTableViewCell.identifier)
        configureNavigationItem()
    }
    
    func configureNavigationItem() {
        self.navigationItem.searchController = searchController
        self.navigationItem.leftBarButtonItem = filterButton
        self.navigationItem.rightBarButtonItem = selectButton
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 34, weight: UIFont.Weight(700))]
        self.navigationItem.title = "이슈"
        
    }
    
}

extension IssueListViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 10
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier, for: indexPath) as? IssueTableViewCell else { return UITableViewCell()
        }
        
        return cell
    }
    
//    func tableView(_ tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
//        let uiview = UIView.init(frame: CGRect(x: 0, y: 0, width: tableView.frame.width, height: 36))
//        let label = UILabel.init(frame: CGRect(x: 0, y: 0, width: 40, height: 20))
//        label.text = "aabcdetgdssdfs"
//        label.sizeToFit()
//        uiview.addSubview(label)
//        return uiview
//    }

}
