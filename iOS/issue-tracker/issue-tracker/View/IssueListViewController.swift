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
        filterBarButton.addTarget(self, action: #selector(filterButtonTapped), for: .touchUpInside)
        bindTableViewDataSource()
        bindTableViewDelegate()
        cancelButton.addTarget(self, action: #selector(cancelButtonTapped), for: .touchUpInside)
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tabBarController?.tabBar.isHidden = false
    }

    private func bindTableViewDataSource() {
        issueListViewModel.issueList
            .bind(to: issueTableView.rx.items) { tableView, _, issue in
            guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier) as? IssueTableViewCell else { return UITableViewCell() }
            cell.setupIssueCell(title: issue.title, description: "구현이 더 필요함", milestoneTitle: issue.milestone.title, relay: BehaviorRelay<[IssueLabel]>(value: issue.label))
            return cell
        }
        .disposed(by: bag)
    }

    func bindTableViewDelegate() {
        issueTableView.rx.itemSelected
            .bind { [weak self] indexPath in
                guard let self = self, let cell = self.issueTableView.cellForRow(at: indexPath) as? IssueTableViewCell else { return }
                if self.issueListViewModel.selectMode.value {
                    cell.selectionStyle = .none
                    cell.check()
                } else {
                    cell.selectionStyle = .none
                    let controller = IssueDetailViewController()
                    self.navigationController?.pushViewController(controller, animated: true)
                }
            }
            .disposed(by: bag)

        issueTableView.rx.itemDeselected
            .bind { [weak self] indexPath in
                guard let self = self, let cell = self.issueTableView.cellForRow(at: indexPath) as? IssueTableViewCell else { return }
                if self.issueListViewModel.selectMode.value {
                    cell.uncheck()
                }
            }
            .disposed(by: bag)
    }
        let controller = UINavigationController(rootViewController: IssueFilterViewController())
        present(controller, animated: true)
    }

    @objc private  func selectButtonTapped() {
        navigationItem.leftBarButtonItem = nil
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: cancelButton)
        navigationItem.title = "이슈 선택"
        navigationItem.searchController = nil
        tabBarController?.tabBar.isHidden = true
        view.addSubview(issueToolbar)
        setupToolbarAutoulayout()
    }

    @objc private func addIssueButtonTapped() {
        let controller = NewIssueViewController()
        navigationController?.pushViewController(controller, animated: true)
    }

    @objc private func cancelButtonTapped() {
        setupNavigationItem()
        tabBarController?.tabBar.isHidden = false
        issueToolbar.removeFromSuperview()
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
        issueTableView.register(IssueTableViewCell.self, forCellReuseIdentifier: IssueTableViewCell.identifier)
        issueTableView.allowsMultipleSelection = true
        issueTableView.dataSource = self
        issueTableView.delegate = self
        issueTableView.tableFooterView = IssueTableFooterView(frame: CGRect(x: 0, y: 0, width: view.frame.width, height: 300))
    }
}

extension IssueListViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 2
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier) as? IssueTableViewCell else { return UITableViewCell() }
        cell.setupIssueCell(title: "제목", description: "이슈에 대한 설명", milestoneTitle: "마일스톤 이름", color: "#DFCD85")
        return cell
    }
}

extension IssueListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let cell = tableView.cellForRow(at: indexPath) as? IssueTableViewCell else { return }
        cell.selectionStyle = .none
        cell.check()

        let controller = IssueDetailViewController()
        navigationController?.pushViewController(controller, animated: true)
    }

    func tableView(_ tableView: UITableView, didDeselectRowAt indexPath: IndexPath) {
        guard let cell = tableView.cellForRow(at: indexPath) as? IssueTableViewCell else { return }
        cell.uncheck()
    }

    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let deleteAction = UIContextualAction(style: .destructive, title: "삭제") { _, _, success in
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
