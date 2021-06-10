import UIKit

class IssueListViewController: UIViewController {

    @IBOutlet weak var issueTableView: UITableView!
    
    //MARK: - NavigationController Property
    private lazy var searchController: UISearchController = {
        let searchController = UISearchController(searchResultsController: nil)
        searchController.searchBar.placeholder = "Search"
        searchController.hidesNavigationBarDuringPresentation = false
        searchController.obscuresBackgroundDuringPresentation = false
        
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
        issueTableView.separatorStyle = UITableViewCell.SeparatorStyle.none
        configureNavigationItem()
        configureTableViewFooterView()
    }
    
    func configureTableViewFooterView() {
        let footerView = UIView(frame: CGRect(x: 0, y: 0, width: issueTableView.contentSize.width, height: 100))
        footerView.backgroundColor = UIColor.clear
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: issueTableView.contentSize.width, height: 20))
        footerView.addSubview(label)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.centerXAnchor.constraint(equalTo: footerView.centerXAnchor).isActive = true
        label.centerYAnchor.constraint(equalTo: footerView.centerYAnchor).isActive = true
        label.textAlignment = .center
        label.text = "아래로 당기면 검색바가 보여요!👁"
        label.textColor = UIColor(red: 135/255, green: 135/255, blue: 141/255, alpha: 1)
        
        self.issueTableView.tableFooterView = footerView
    }
    
    func scrollViewDidEndDragging(_ scrollView: UIScrollView, willDecelerate decelerate: Bool) {
        self.issueTableView.tableFooterView = nil
    }

    func configureNavigationItem() {
        self.navigationItem.leftBarButtonItem = filterButton
        self.navigationItem.rightBarButtonItem = selectButton
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 34, weight: UIFont.Weight(700))]
        self.navigationItem.title = "이슈"
        self.navigationItem.searchController = searchController
        let micImage = UIImage(systemName: "mic.fill")
        searchController.searchBar.setImage(micImage, for: .bookmark, state: .normal)
        searchController.searchBar.showsBookmarkButton = true
    }
    
}

extension IssueListViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 2
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier, for: indexPath) as? IssueTableViewCell else { return UITableViewCell()}
        
        return cell
    }
}
