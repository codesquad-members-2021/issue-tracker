import UIKit

class IssueListViewController: UIViewController {

    @IBOutlet weak var issueTableView: UITableView!
    
    private lazy var searchController: UISearchController = {
        let searchController = UISearchController(searchResultsController: nil)
        searchController.searchBar.placeholder = "Search"
        searchController.hidesNavigationBarDuringPresentation = false
        searchController.obscuresBackgroundDuringPresentation = false
        return searchController
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        issueTableView.register(IssueTableViewCell.nib, forCellReuseIdentifier: IssueTableViewCell.identifier)
        configureNavigationItem()
        configureTableViewFooterView()
    }
    override func viewWillAppear(_ animated: Bool) {
        configureFilterButton()
        configureSelectButton()
        self.tabBarController?.tabBar.isHidden = false
        self.navigationController?.navigationBar.isHidden = false
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
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 34, weight: UIFont.Weight(700))]
        self.navigationItem.title = "이슈"
        self.navigationItem.searchController = searchController
        let micImage = UIImage(systemName: "mic.fill")
        searchController.searchBar.setImage(micImage, for: .bookmark, state: .normal)
        searchController.searchBar.showsBookmarkButton = true
    }
    
    func configureFilterButton() {
        let buttonImage = UIImage(systemName: "line.horizontal.3.decrease")
        let button = UIButton(type: .system)
        button.setImage(buttonImage, for: .normal)
        button.setTitle(" 필터", for: .normal)
        button.addTarget(self, action: #selector(showIssueListFilterView(sender:)), for: .touchUpInside)
        let filterButton = UIBarButtonItem(customView: button)
        self.navigationItem.leftBarButtonItem = filterButton
    }
    
    func configureSelectButton() {
        let buttonImage = UIImage(systemName: "checkmark.circle")
        let button = UIButton(type: .system)
        button.setImage(buttonImage, for: .normal)
        button.setTitle("선택 ", for: .normal)
        button.semanticContentAttribute = .forceRightToLeft
        button.addTarget(self, action: #selector(showIssueSelectionView(sender:)), for: .touchUpInside)
        let selectButton = UIBarButtonItem(customView: button)
        self.navigationItem.rightBarButtonItem = selectButton
    }
 
    @objc func showIssueListFilterView(sender: UIBarButtonItem) {
        guard let filterViewController = self.storyboard?.instantiateViewController(identifier: "IssueListFilterViewController") as? IssueListFilterViewController else {
            return
        }
        self.present(filterViewController, animated: true, completion: nil)
    }
    
    @objc func showIssueSelectionView(sender: UIBarButtonItem) {
        guard let issueSelectionViewController = self.storyboard?.instantiateViewController(identifier: "IssueSelectionViewController") as? IssueSelectionViewController else {
            return
        }
        self.navigationController?.pushViewController(issueSelectionViewController, animated: false)
    }
    
    //MARK: - TableView Cell Swipe Action Method
    func deleteAction(at indexPath: IndexPath) -> UIContextualAction {
        let action = UIContextualAction(style: .normal, title: "삭제", handler: { (_, _, success) in
            
            self.issueTableView.deleteRows(at: [indexPath], with: .automatic)
            success(true)
        })
        action.image = UIImage(systemName: "trash")
        action.backgroundColor = UIColor(red: 1, green: 59/255, blue: 48/255, alpha: 1)
        return action
    }
    
    func closeAction(at indexPath: IndexPath) -> UIContextualAction {
        let action = UIContextualAction(style: .normal, title: "닫기", handler: { (_, _, success) in
            success(true)
        })
        action.image = UIImage(systemName: "archivebox")
        
        action.backgroundColor = UIColor(red: 204/255, green: 212/255, blue: 1, alpha: 1)
        return action
    }

}

extension IssueListViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 2
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier, for: indexPath) as? IssueTableViewCell else {
            return UITableViewCell()            
        }
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let deleteAction = deleteAction(at: indexPath)
        let closeAction = closeAction(at: indexPath)
        return UISwipeActionsConfiguration(actions: [closeAction, deleteAction])
    }
}
