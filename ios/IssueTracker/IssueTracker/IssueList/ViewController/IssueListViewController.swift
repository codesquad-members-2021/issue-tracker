//
//  IssueListViewController.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/08.
//

import UIKit

class IssueListViewController: UIViewController {
    
    @IBOutlet private weak var issueLabel: UILabel!
    @IBOutlet private weak var searchBar: UISearchBar!
    @IBOutlet private weak var issueTableView: UITableView!
    @IBOutlet private weak var filterButton: UIButton!
    @IBOutlet private weak var editButton: UIButton!
    @IBOutlet private weak var plusButton: UIButton!
    
    @IBOutlet private weak var editStateView: UIView!
    @IBOutlet private weak var issueNumLabel: UILabel!
    @IBOutlet private weak var checkAllButton: UIButton!
    private var isCheckAll: Bool!
    
    private var viewModel: IssueViewModel!
    private var dataSource: IssueDataSource!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setViewModel(with: IssueListMock.data)
        setting()
    }
    
}

//MARK:- Set Inital Condition

extension IssueListViewController {
    
    func setViewModel(with issues: [Issue]) {
        viewModel = IssueViewModel(issues: issues)
        dataSource = IssueDataSource(viewModel: viewModel)
    }
    
    private func setting() {
        issueTableView.dataSource = dataSource
        issueTableView.delegate = self
        issueTableView.register(UINib(nibName: IssueCell.reuseIdentifier, bundle: nil), forCellReuseIdentifier: IssueCell.reuseIdentifier)
        issueTableView.allowsMultipleSelectionDuringEditing = true
        editStateView.isHidden = true
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return UITableView.automaticDimension
    }
    
}

//MARK:- Delete Issue

extension IssueListViewController: UITableViewDelegate {
    
    private func alertForDelete(with index: IndexPath) {
        let alert = UIAlertController(title: "정말로 이 이슈를 삭제하시겠습니까?", message: "", preferredStyle: .alert)
        let cancel = UIAlertAction(title: "취소", style: .default, handler: nil)
        let delete = UIAlertAction(title: "삭제", style: .destructive) { action in
            self.viewModel.deleteIssue(at: index.row)
            self.issueTableView.deleteRows(at: [index], with: UITableView.RowAnimation.automatic)
        }
        alert.addAction(cancel)
        alert.addAction(delete)
        self.present(alert, animated: true, completion: nil)
    }
    
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let close = UIContextualAction(style: .normal, title: "Close") { action, view, completion in
            completion(true)
        }
        let delete = UIContextualAction(style: .destructive, title: "Delete") { action, view, completion in
            self.alertForDelete(with: indexPath)
            completion(true)
        }
        close.image = UIImage(systemName: "archivebox")
        delete.image = UIImage(systemName: "trash")
        
        let configuration = UISwipeActionsConfiguration(actions: [delete, close])
        configuration.performsFirstActionWithFullSwipe = false
        return configuration
    }
    
}

//MARK:- Editing Mode

extension IssueListViewController {
    
    @IBAction private func editButtonTouched(_ sender: UIButton) {
        fillCheckButton(issueTableView)
        changeIssueNumLabel(issueTableView)
        
        issueTableView.isEditing = !issueTableView.isEditing
        issueTableView.setEditing(issueTableView.isEditing, animated: true)
        editButton.setTitle(issueTableView.isEditing ? "취소" : "편집", for: .normal)
        issueLabel.textWithAnimation(text: issueTableView.isEditing ? "이슈 선택" : "이슈", 0.2)
        filterButton.setIsHidden(issueTableView.isEditing, animated: true)
        editStateView.setIsHidden(!issueTableView.isEditing, animated: true)
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
        changeIssueNumLabel(issueTableView)
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        fillCheckButton(tableView)
        changeIssueNumLabel(tableView)
    }
    
    func tableView(_ tableView: UITableView, didDeselectRowAt indexPath: IndexPath) {
        fillCheckButton(tableView)
        changeIssueNumLabel(tableView)
    }
    
    private func fillCheckButton(_ tableView: UITableView) {
        let allIndexPath = (0..<viewModel.issues.count).map { IndexPath(row: $0, section: 0) }
        isCheckAll = tableView.indexPathsForSelectedRows == allIndexPath
        if isCheckAll {
            checkAllButton.setImage(UIImage(systemName: "checkmark.circle.fill"), for: .normal)
        } else {
            checkAllButton.setImage(UIImage(systemName: "checkmark.circle"), for: .normal)
        }
    }
    
    private func changeIssueNumLabel(_ tableView: UITableView) {
        let issueNum = tableView.indexPathsForSelectedRows?.count
        if issueNum == nil {
            issueNumLabel.textWithAnimation(text: "이슈를 선택하세요", 0.15)
            issueNumLabel.textColor = .secondaryLabel
        } else {
            issueNumLabel.textWithAnimation(text: "\(issueNum!)개의 이슈가 선택됨", 0.15)
            issueNumLabel.textColor = .label
        }
    }
    
}

