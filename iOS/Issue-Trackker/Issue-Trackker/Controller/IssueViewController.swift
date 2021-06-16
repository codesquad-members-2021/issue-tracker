//
//  IssueViewController.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/11.
//

import UIKit

class IssueViewController: UIViewController, UISearchBarDelegate {
    
    @IBOutlet weak var issueTableView: UITableView!
    @IBOutlet weak var addIssueButton: UIButton!
    
    private var searchController: UISearchController?

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.searchController = UISearchController()
        self.searchController?.searchBar.delegate = self
        self.searchController?.hidesNavigationBarDuringPresentation = true
        self.addIssueButton.addTarget(self, action: #selector(addIssueButtonTouched(_:)), for: .touchUpInside)
        setNavigationItem()
    }
    
    func setNavigationItem() {
        self.navigationItem.title = "이슈"
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationItem.searchController = searchController
        self.navigationItem.hidesSearchBarWhenScrolling = true
        self.issueTableView.tableFooterView = setFooterView()
        
        let filterButton = UIButton.setButton(image: "filter.png", title: " 필터")
        filterButton.addTarget(self, action: #selector(filterButtonTouched(_:)), for: .touchUpInside)
      
        let selectButton = UIButton.setButton(image: "select.png", title: "선택")
        selectButton.addTarget(self, action: #selector(selectButtonTouched(_:)), for: .touchUpInside)
        selectButton.semanticContentAttribute = .forceRightToLeft

        self.navigationItem.leftBarButtonItem = UIBarButtonItem(customView: filterButton)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(customView: selectButton)
        
    }
    
    func setFooterView() -> UIView {
        let footerView = UIView(frame: CGRect(origin: .zero, size: CGSize(width: self.issueTableView.bounds.width, height: 100)))
        let label = UILabel(frame: CGRect(origin: .zero, size: CGSize(width: self.issueTableView.bounds.width, height: 20)))
        label.text = "아래로 당기면 검색바가 보여요! 👀"
        label.textColor = .systemGray2
        label.textAlignment = .center
        label.center = footerView.center
        footerView.addSubview(label)
        return footerView
    }
    
    @objc func filterButtonTouched(_ sender: UIButton) {
        guard let filterViewController = storyboard?.instantiateViewController(identifier: "Filter") as? FilterTableViewController else {
            return
        }
        let naviController = UINavigationController(rootViewController: filterViewController)
        self.present(naviController, animated: true, completion: nil)
    }
    
    @objc func selectButtonTouched(_ sender: UIButton) {
        guard let selectViewController = storyboard?.instantiateViewController(identifier: "Select") as? IssueSelectViewController else {
            return
        }
        
        self.present(selectViewController, animated: true, completion: nil)
    }
    
    @objc func addIssueButtonTouched(_ sender: UIButton) {
        guard let addIssueViewController = storyboard?.instantiateViewController(identifier: "AddIssue") as? AddingIssueViewController else {
            return
        }
        let naviController = UINavigationController(rootViewController: addIssueViewController)
        naviController.modalPresentationStyle = .fullScreen
        self.present(naviController, animated: true, completion: nil)
    }
}

extension IssueViewController: UITableViewDataSource {
    // MARK: - Table view data source

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "IssueCell") as? IssueCell else {
            return IssueCell()
        }
        return cell
    }
    
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        
        let deleteAction = UIContextualAction(style: .destructive,
                                              title:  "삭제",
                                              handler: { (ac:UIContextualAction, view:UIView, success:(Bool) -> Void) in
                                                    success(true)
                                              })

        deleteAction.image = UIImage(named: "delete.png")
        
        let closeAction = UIContextualAction(style: .normal,
                                              title:  "닫기",
                                              handler: { (ac:UIContextualAction, view:UIView, success:(Bool) -> Void) in
                                                    success(true)
                                              })
        
        return UISwipeActionsConfiguration(actions: [closeAction, deleteAction])
    }
}

extension IssueViewController: UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return UITableView.automaticDimension
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let commentController = storyboard?.instantiateViewController(identifier: "Comment") as? CommentViewController else {
            return
        }
        let naviController = UINavigationController(rootViewController: commentController)
        naviController.modalPresentationStyle = .fullScreen
        self.present(naviController, animated: true, completion: nil)
    }
}

