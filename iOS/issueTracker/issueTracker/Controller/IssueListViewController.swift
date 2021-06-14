//
//  SecondViewController.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/09.
//

import UIKit

class IssueListViewController: UIViewController {
    @IBOutlet weak var issueListTableView: UITableView!
    @IBOutlet weak var bottomToolbar: UIToolbar!
    override func viewDidLoad() {
        super.viewDidLoad()
        self.set(navigationBarTitle: NavigationItemTitles.issue.description)
        self.setupLeftNavigationItem(buttonTitle: NavigationItemTitles.filter.description)
        self.setupRightNavigationItem(buttonTitle: NavigationItemTitles.select.description)
        setupSearchbarcontroller()
        setuptableViewDelegateDataSource()
        setuptableViewCustomView()
        bottomToolbar.isHidden = true
    }
    func set(navigationBarTitle: String) {
        self.navigationItem.title = navigationBarTitle
        self.navigationController?.navigationBar.prefersLargeTitles = true
    }
    func setupLeftNavigationItem(buttonTitle: String) {
        let uibutton = UIButton()
        uibutton.setTitleColor(ButtonColors.buttonColor.value, for: .normal)
        uibutton.setImage(UIImage(named: ButtonImagesTitle.filter.description), for: .normal)
        uibutton.setTitle(buttonTitle, for: .normal)
        uibutton.addTarget(self, action: #selector(pressedLeftbutton), for: .touchDown)
        let leftbarbutton = UIBarButtonItem(customView: uibutton)
        self.navigationItem.leftBarButtonItem = leftbarbutton
    }
    @objc func pressedLeftbutton() {
        let identity = ViewControllerIdentity.issueListFilterViewController.description
        let nextVC = self.storyboard?.instantiateViewController(identifier: identity) as? IssueFilterViewController
        self.present(nextVC!, animated: true, completion: nil)
    }
    func setupRightNavigationItem(buttonTitle: String) {
        let uibutton = UIButton()
        uibutton.setTitleColor(ButtonColors.buttonColor.value, for: .normal)
        uibutton.setImage(UIImage(named: ButtonImagesTitle.selector.description), for: .normal)
        uibutton.setTitle(buttonTitle, for: .normal)
        uibutton.semanticContentAttribute = .forceRightToLeft
        let rightbarbutton = UIBarButtonItem(customView: uibutton)
        self.navigationItem.rightBarButtonItem = rightbarbutton
    }
    func setupSearchbarcontroller() {
        let searchbarController = UISearchController(searchResultsController: nil)
        searchbarController.hidesNavigationBarDuringPresentation = true
        self.navigationItem.searchController = searchbarController
    }
    func setuptableViewDelegateDataSource() {
        self.issueListTableView.dataSource = self
        self.issueListTableView.delegate = self
    }
    func setuptableViewCustomView() {
        let viewFrame = CGRect(origin: .zero, size: CGSize(width: self.issueListTableView.frame.width, height: 100))
        let footerView = UIView(frame: viewFrame)
        let label = UILabel(frame: CGRect(origin: .zero, size: footerView.frame.size))
        label.text = TableViewInformationMessage.showSearchBar.description
        footerView.addSubview(label)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.centerXAnchor.constraint(equalTo: footerView.centerXAnchor).isActive = true
        label.centerYAnchor.constraint(equalTo: footerView.centerYAnchor).isActive = true
        label.textAlignment = .center
        label.textColor = .systemGray4
        footerView.backgroundColor = .clear
        self.issueListTableView.tableFooterView = footerView
    }
}

extension IssueListViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let identity = IssueTableViewCell.cellIdentity
        guard let cell = tableView.dequeueReusableCell(withIdentifier: identity) as? IssueTableViewCell else {
            return UITableViewCell()
        }
        return cell
    }
}

extension IssueListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView,
                   trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let shareAction = UIContextualAction(style: .normal,
                                             title: "수정",
                                             handler: { (_ :UIContextualAction, _:UIView, _:(Bool) -> Void) in
        })
        let deleteAction = UIContextualAction(style: .destructive,
                                              title: "삭제",
                                              handler: { (_:UIContextualAction, _:UIView, _:(Bool) -> Void) in
        })
        shareAction.backgroundColor = .systemBlue
        deleteAction.image = UIImage(systemName: ButtonImagesTitle.delete.description)
        return UISwipeActionsConfiguration(actions: [deleteAction, shareAction])
    }
}

enum TableViewInformationMessage: CustomStringConvertible {
    case showSearchBar
    var description: String {
        switch self {
        case .showSearchBar:
            return "아래로 스크롤 하면 검색할 수 있습니다."
        }
    }
}

enum ButtonImagesTitle: CustomStringConvertible {
    case filter
    case selector
    case delete
    case next
    var description: String {
        switch self {
        case .filter:
            return "filterIcon"
        case .selector:
            return "selectIcon"
        case .delete:
            return "trash"
        case .next:
            return "chevron.right"
        }
    }
}

enum ButtonColors {
    case buttonColor
    var value: UIColor {
        switch self {
        case .buttonColor:
            return UIColor(red: 0, green: 0.478, blue: 1, alpha: 1)
        }
    }
}

enum NavigationItemTitles: CustomStringConvertible {
    case issue
    case filter
    case select
    
    var description: String {
        switch self {
        case .issue:
            return "이슈"
        case .filter:
            return "필터"
        case .select:
            return "선택"
        }
    }
}
