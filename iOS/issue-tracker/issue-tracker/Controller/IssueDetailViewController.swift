//
//  IssueDetailViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/11.
//

import UIKit
import SnapKit
import RxSwift
import RxCocoa

class IssueDetailViewController: UIViewController {
    private let cellReuseIdentifier = "IssueDetailCell"
    private var viewModel = IssueDetailViewModel()
    private let disposeBag = DisposeBag()
    private var comment: [Comment] = []

    private let tableView: UITableView = {
        let tableView = UITableView()
        tableView.rowHeight = 130
        tableView.register(IssueDetailTableViewCell.self, forCellReuseIdentifier: "IssueDetailCell")
        return tableView
    }()

    private let toolbar: UIToolbar = {
        let toolbar = UIToolbar(frame: CGRect(origin: .zero, size: CGSize(width: 100, height: 100)))
        let textField = ToolBarTextField(frame: toolbar.bounds)
        let upButton = UIBarButtonItem(image: UIImage(systemName: "chevron.up.circle"),
                                         style: .plain, target: self, action: #selector(scrollToBefore))
        let downButton = UIBarButtonItem(image: UIImage(systemName: "chevron.down.circle"),
                                           style: .plain, target: self, action: #selector(scrollToNext))
        let comment = UIBarButtonItem(customView: textField)
        let space = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: comment, action: nil)
        toolbar.setItems([upButton, downButton, space, comment], animated: false)
        return toolbar
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .systemBackground
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.rightBarButtonItem = UIBarButtonItem(image: UIImage(systemName: "ellipsis"), style: .plain, target: self, action: #selector(showIssueDetailInfo))

        tableView.dataSource = self
        tableView.delegate = self
        tableView.frame = view.bounds
        tableView.selectRow(at: IndexPath(row: 0, section: 0), animated: false, scrollPosition: .none)

        view.addSubview(tableView)
        view.addSubview(toolbar)

        setupAutolayout()
        fetch()
        bind()
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tabBarController?.tabBar.isHidden = true
    }

    private func setupAutolayout() {
        toolbar.snp.makeConstraints { maker in
            maker.leading.trailing.equalToSuperview()
            maker.bottom.equalTo(view.safeAreaLayoutGuide)
            maker.height.equalTo(44)
        }
    }

    @objc
    private func scrollToBefore() {
        guard let indexPath = tableView.indexPathForSelectedRow,
              indexPath.row != 0 else { return }
        tableView.selectRow(at: IndexPath(row: indexPath.row - 1, section: indexPath.section),
                            animated: true, scrollPosition: .top)
    }

    @objc
    private func scrollToNext() {
        guard let indexPath = tableView.indexPathForSelectedRow,
              indexPath.row + 1 < comment.count else { return }
        tableView.selectRow(at: IndexPath(row: indexPath.row + 1, section: indexPath.section),
                            animated: true, scrollPosition: .bottom)
    }

    @objc
    private func showIssueDetailInfo() {
        let storyboard = UIStoryboard(name: "Modal", bundle: nil)
        let controller = storyboard.instantiateViewController(withIdentifier: "Modal")
        controller.modalPresentationStyle = .custom
        present(controller, animated: true, completion: nil)
    }
}

private extension IssueDetailViewController {
    func fetch() {
        viewModel.fetch()
    }

    func bind() {
        viewModel.subject.bind { detail in
            self.navigationItem.title = detail?.data.title
            guard let comment = detail?.data.comment else { return }
            self.comment = comment
            self.tableView.reloadData()
        }
        .disposed(by: disposeBag)
    }
}
extension IssueDetailViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return comment.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath) as? IssueDetailTableViewCell else {
            return UITableViewCell()
        }
        cell.accessoryView = UIImageView(image: UIImage(systemName: "ellipsis"))
        cell.configure(model: comment[indexPath.row])
        return cell
    }
}

extension IssueDetailViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
        UIView()
    }
}
