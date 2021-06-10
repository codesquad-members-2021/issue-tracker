//
//  IssueTableViewController.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/10.
//

import UIKit

class IssueTableViewController: UITableViewController, UISearchBarDelegate {
    
    private var searchController: UISearchController?

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.searchController = UISearchController()
        self.searchController?.searchBar.delegate = self
        self.searchController?.hidesNavigationBarDuringPresentation = true

        setNavigationItem()
    }
    
    func setNavigationItem() {
        self.navigationItem.title = "이슈"
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationItem.searchController = searchController
        self.navigationItem.hidesSearchBarWhenScrolling = true
        self.tableView.tableFooterView = setFooterView()
        let filtetrButton = UIButton()
        filtetrButton.setImage(UIImage(named: "filter.png"), for: .normal)
        //leftBarButton.addTarget(self, action: nil, for: .touchUpInside)
        filtetrButton.setTitle(" 필터", for: .normal)
        filtetrButton.setTitleColor(UIColor(red: 0, green: 0.478, blue: 1, alpha: 1), for: .normal)
        let leftBarButton = UIBarButtonItem(customView: filtetrButton)
        
        let selectButton = UIButton()
        selectButton.semanticContentAttribute = .forceRightToLeft
        selectButton.setImage(UIImage(named: "select.png"), for: .normal)
        selectButton.setTitle("선택 ", for: .normal)
        selectButton.setTitleColor(UIColor(red: 0, green: 0.478, blue: 1, alpha: 1), for: .normal)

        let rightBarButton = UIBarButtonItem(customView: selectButton)
        
        self.navigationItem.leftBarButtonItem = leftBarButton
        self.navigationItem.rightBarButtonItem = rightBarButton
    }
    
    func setFooterView() -> UIView {
        let footerView = UIView(frame: CGRect(origin: .zero, size: CGSize(width: self.tableView.bounds.width, height: 100)))
        let label = UILabel(frame: CGRect(origin: .zero, size: CGSize(width: self.tableView.bounds.width, height: 20)))
        label.text = "아래로 당기면 검색바가 보여요! 👀"
        label.textColor = .systemGray2
        label.textAlignment = .center
        label.center = footerView.center
        footerView.addSubview(label)
        return footerView
    }
    
    // MARK: - Table view data source

    override func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return UITableView.automaticDimension
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "IssueCell") as? IssueCell else {
            return IssueCell()
        }
        return cell
        
    }
}
