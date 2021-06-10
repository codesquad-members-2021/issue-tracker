//
//  IssueListViewController.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {
    
    @IBOutlet private weak var issueNumLabel: UILabel!
    @IBOutlet private weak var searchBar: UISearchBar!
    @IBOutlet private weak var issueTableView: UITableView!
    @IBOutlet private weak var filterButton: UIButton!
    @IBOutlet private weak var editButton: UIButton!
    @IBOutlet private weak var plusButton: UIButton!
    
    @IBOutlet weak var editableView: UIView!
    @IBOutlet weak var checkAllButton: UIButton!
    private var isCheckAll: Bool!
    
    private var viewModel: IssueViewModel!
    private var dataSource: IssueDataSource!
    private var tableViewDelegate: IssueTableDelegate!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setViewModel(with: IssueListMock.data)
        setting()
        setObserver()
    }
    
}


extension IssueListViewController: UITableViewDelegate {
    
    func setViewModel(with issues: [Issue]) {
        viewModel = IssueViewModel(issues: issues)
        dataSource = IssueDataSource(viewModel: viewModel)
        tableViewDelegate = IssueTableDelegate()
    }
    
    private func setting() {
        issueTableView.dataSource = dataSource
        issueTableView.delegate = tableViewDelegate
        issueTableView.register(UINib(nibName: IssueCell.reuseIdentifier, bundle: nil), forCellReuseIdentifier: IssueCell.reuseIdentifier)
        issueTableView.allowsMultipleSelectionDuringEditing = true
        editableView.isHidden = true
    }
    
}


extension IssueListViewController {
    
    private func setObserver() {
        NotificationCenter.default.addObserver(self, selector: #selector(alertForDelete), name: .deleteIssue, object: nil)
    }
    
    @objc func alertForDelete(_ notification: Notification) {
        guard let index = notification.userInfo?["index"] as? IndexPath else { return }
        
        let alert = UIAlertController(title: "정말로 이 이슈를 삭제하시겠습니까?", message: "", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "취소", style: .default, handler: nil))
        alert.addAction(UIAlertAction(title: "삭제", style: .destructive) { action in
            self.viewModel.deleteIssue(at: index.row)
            self.issueTableView.deleteRows(at: [index], with: UITableView.RowAnimation.automatic)
        })
        self.present(alert, animated: true, completion: nil)
    }
    
}


extension IssueListViewController {
    
    @IBAction private func editButtonTouched(_ sender: UIButton) {
        issueTableView.isEditing = !issueTableView.isEditing
        issueTableView.setEditing(issueTableView.isEditing, animated: true)
        editButton.setTitle(issueTableView.isEditing ? "취소" : "편집", for: .normal)
        filterButton.setIsHidden(issueTableView.isEditing, animated: true)
        editableView.setIsHidden(!issueTableView.isEditing, animated: true)
    }
    
    @IBAction private func checkAllButtonTouched(_ sender: UIButton) {
        let allIndexPath = (0..<viewModel.issues.count).map { IndexPath(row: $0, section: 0) }
        isCheckAll = issueTableView.indexPathsForSelectedRows == allIndexPath
        
        if isCheckAll {
            checkAllButton.setImage(UIImage(systemName: "checkmark.circle"), for: .normal)
            allIndexPath.forEach {
                issueTableView.deselectRow(at: $0, animated: true)
            }
        } else {
            checkAllButton.setImage(UIImage(systemName: "checkmark.circle.fill"), for: .normal)
            allIndexPath.forEach {
                issueTableView.selectRow(at: $0, animated: true, scrollPosition: .none)
            }
        }
    }
    
}

