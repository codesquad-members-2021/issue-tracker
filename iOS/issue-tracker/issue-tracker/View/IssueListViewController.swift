//
//  IssueListViewController.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/10.
//

import UIKit
import SnapKit
import RxSwift
import RxCocoa

final class IssueListViewController: UIViewController {

    @IBOutlet weak var issueTableView: UITableView!

    private let addIssueButton = AddIssueButton(frame: CGRect(x: 0, y: 0, width: 64, height: 64))
    private let filterBarButton = FilterBarButton()
    private let selectBarButton = SelectBarButton()
    private let cancelButton = CancelButton()
    private let addIssueTapGesture = UITapGestureRecognizer()
    private let issueToolbar = IssueToolbar(frame: CGRect(x: 0, y: 0, width: 100, height: 100))
    private let searchController: UISearchController = {
        var searchController = UISearchController(searchResultsController: nil)
        searchController.searchBar.setImage(UIImage(systemName: "mic.fill"), for: .bookmark, state: .normal)
        searchController.searchBar.showsBookmarkButton = true
        return searchController
    }()

    private var issueListViewModel = IssueListViewModel(networkManager: NetworkManager())
    private let bag = DisposeBag()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupNavigationItem()
        setupIssueTableView()
        setupAddIssueButtonAutolayout()
        addIssueButton.addGestureRecognizer(addIssueTapGesture)
        bindTableViewDataSource()
        bindTableViewDelegate()
        bindButton()
        bindSelectMode()
        bindIssueToolBar()
        issueListViewModel.fetchIssueList()
        view.backgroundColor = .systemGroupedBackground
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tabBarController?.tabBar.isHidden = false
    }

    private func bindTableViewDataSource() {
        issueListViewModel.issueList
            .bind(to: issueTableView.rx.items) { tableView, _, issue in
            guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier) as? IssueTableViewCell else { return UITableViewCell() }
                cell.setupIssueCell(title: issue.title, description: nil, milestoneTitle: issue.milestone?.title, issueLabels: issue.labels)
                cell.backgroundColor = .systemGroupedBackground
            return cell
        }
        .disposed(by: bag)
    }

    func bindTableViewDelegate() {
        issueTableView.rx.itemSelected
            .bind { [weak self] indexPath in
                guard let self = self, let cell = self.issueTableView.cellForRow(at: indexPath) as? IssueTableViewCell else { return }
                let issue = self.issueListViewModel.issueList.value[indexPath.row]
                if self.issueListViewModel.selectMode.value {
                    self.issueListViewModel.selectedCell.accept(self.issueListViewModel.selectedCell.value + [issue])
                    cell.selectionStyle = .none
                    cell.check()
                } else {
                    guard let id = issue.id else { return }
                    cell.selectionStyle = .none
                    let controller = IssueDetailViewController()
                    controller.fetchData(id: id)
                    self.navigationController?.pushViewController(controller, animated: true)
                }
            }
            .disposed(by: bag)

        issueTableView.rx.itemDeselected
            .bind { [weak self] indexPath in
                guard let self = self, let cell = self.issueTableView.cellForRow(at: indexPath) as? IssueTableViewCell else { return }
                if self.issueListViewModel.selectMode.value {
                    let deselectedIssue = self.issueListViewModel.issueList.value[indexPath.row]
                    var selectedIssue = self.issueListViewModel.selectedCell.value
                    if let index = selectedIssue.firstIndex(where: { $0 == deselectedIssue }) {
                        selectedIssue.remove(at: index)
                        self.issueListViewModel.selectedCell.accept(selectedIssue)
                    }
                    cell.uncheck()
                }
            }
            .disposed(by: bag)
    }

    func bindButton() {
        selectBarButton.rx.tap
            .map { true }
            .bind(to: issueListViewModel.selectMode)
            .disposed(by: bag)

        cancelButton.rx.tap
            .map { false }
            .bind(to: issueListViewModel.selectMode)
            .disposed(by: bag)

        filterBarButton.rx.tap
            .bind { [weak self] _ in
                self?.filterButtonTapped()
            }
            .disposed(by: bag)

        addIssueTapGesture.rx.event
            .bind(onNext: { [weak self] _ in
                self?.addIssueButtonTapped()
            })
            .disposed(by: bag)
    }

    func bindSelectMode() {
        issueListViewModel.selectMode
            .subscribe { [weak self] event in
                if let element = event.element, element {
                    self?.selectButtonTapped()
                } else {
                    self?.cancelButtonTapped()
                }
            }
            .disposed(by: bag)
    }

    func bindIssueToolBar() {
        issueListViewModel.selectedCell
            .bind { [weak self] issues in
                if issues.count == 0 {
                    self?.issueToolbar.labelBarButtonItem.title = "이슈를 선택하세요"
                    self?.issueToolbar.closeIssueBarButtonItem.isEnabled = false
                } else {
                    self?.issueToolbar.labelBarButtonItem.title = "\(issues.count)개의 이슈가 선택됨"
                    self?.issueToolbar.closeIssueBarButtonItem.isEnabled = true
                }
            }
            .disposed(by: bag)

        issueToolbar.checkBoxBarButtonItem.rx.tap
            .bind { [weak self] _ in
                guard let self = self else { return }
                let rows = self.issueTableView.numberOfRows(inSection: 0)
                for row in 0..<rows {
                    self.issueTableView.selectRow(at: IndexPath(row: row, section: 0), animated: false, scrollPosition: .none)
                    let cell = self.issueTableView.cellForRow(at: IndexPath(row: row, section: 0)) as? IssueTableViewCell
                    cell?.check()
                }
                self.issueListViewModel.selectedCell.accept(self.issueListViewModel.issueList.value)
            }
            .disposed(by: bag)

        issueToolbar.closeIssueBarButtonItem.rx.tap
            .bind { [weak self] _ in
                guard let self = self else { return }
                self.issueListViewModel.patchIssue(issues: self.issueListViewModel.selectedCell.value)
            }
            .disposed(by: bag)
    }

    private func filterButtonTapped() {
        let controller = UINavigationController(rootViewController: IssueFilterViewController())
        present(controller, animated: true)
    }

    private  func selectButtonTapped() {
        navigationItem.leftBarButtonItem = nil
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: cancelButton)
        navigationItem.title = "이슈 선택"
        navigationItem.searchController = nil
        tabBarController?.tabBar.isHidden = true
        issueTableView.tableFooterView?.isHidden = true
        view.addSubview(issueToolbar)
        setupToolbarAutoulayout()
    }

   private func addIssueButtonTapped() {
        let controller = NewIssueViewController()
        navigationController?.pushViewController(controller, animated: true)
    }

    private func cancelButtonTapped() {
        issueListViewModel.selectedCell.accept([])
        setupNavigationItem()
        tabBarController?.tabBar.isHidden = false
        issueToolbar.removeFromSuperview()
        issueTableView.tableFooterView?.isHidden = false
        guard let indexPath = issueTableView.indexPathsForSelectedRows else { return }
        for i in indexPath {
            issueTableView.deselectRow(at: i, animated: false)
            if let cell = issueTableView.cellForRow(at: i) as? IssueTableViewCell {
                cell.uncheck()
            }
        }
    }

    private func setupAddIssueButtonAutolayout() {
        view.addSubview(addIssueButton)
        addIssueButton.snp.makeConstraints { button in
            button.width.height.equalTo(64)
            button.trailing.equalToSuperview().offset(-16)
            button.bottom.equalToSuperview().offset(-100)
        }
    }

    private func setupToolbarAutoulayout() {
        issueToolbar.snp.makeConstraints { toolbar in
            toolbar.leading.trailing.equalToSuperview()
            toolbar.bottom.equalTo(view.safeAreaLayoutGuide)
            toolbar.height.equalTo(44)
        }
    }

    private func setupNavigationItem() {
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "이슈"
        navigationItem.leftBarButtonItem = UIBarButtonItem(customView: filterBarButton)
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: selectBarButton)
        navigationItem.searchController = searchController
    }

    private func setupIssueTableView() {
        issueTableView.backgroundColor = .systemGroupedBackground
        issueTableView.register(IssueTableViewCell.self, forCellReuseIdentifier: IssueTableViewCell.identifier)
        issueTableView.allowsMultipleSelection = true
        issueTableView.delegate = self
        issueTableView.tableFooterView = IssueTableFooterView(frame: CGRect(x: 0, y: 0, width: view.frame.width, height: 300))
        issueTableView.separatorStyle = .none
    }
}

extension IssueListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let deleteAction = UIContextualAction(style: .destructive, title: "삭제") { [weak self] _, _, success in
            guard let self = self else { return }
            self.issueListViewModel.deleteIssue(id: self.issueListViewModel.issueList.value[indexPath.row].id!)
            success(true)
        }

        let shareAction = UIContextualAction(style: .normal, title: "닫기") { _, _, success in

            success(true)
        }

        deleteAction.image = UIImage(systemName: "trash")
        shareAction.image = UIImage(systemName: "archivebox")
        shareAction.backgroundColor = #colorLiteral(red: 0.7988751531, green: 0.8300203681, blue: 0.9990373254, alpha: 1)

        return UISwipeActionsConfiguration(actions: [shareAction, deleteAction])
    }
}
