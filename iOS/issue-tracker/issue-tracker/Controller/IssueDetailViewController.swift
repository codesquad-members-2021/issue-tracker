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

final class IssueDetailViewController: UIViewController {
    private let cellReuseIdentifier = "IssueDetailCell"
    var viewModel: IssueDetailViewModel!
    private let disposeBag = DisposeBag()
    private var comment: [Comment] = []
    private var constaint: NSLayoutConstraint?

    private let tableView: UITableView = {
        let tableView = UITableView()
        tableView.rowHeight = 130
        tableView.register(IssueDetailTableViewCell.self, forCellReuseIdentifier: "IssueDetailCell")
        return tableView
    }()

    private let textField = ToolBarTextField()

    deinit {
        NotificationCenter.default.removeObserver(self)
    }

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
        view.addSubview(textField)

        setupAutolayout()
        setupKeyboardNotification()
        fetchData()
        bind()

        view.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(handleTapGesture)))
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tabBarController?.tabBar.isHidden = true
    }

    private func setupKeyboardNotification() {
        let center = NotificationCenter.default
        center.addObserver(forName: UIResponder.keyboardWillShowNotification, object: nil, queue: .main) { [weak self] noti in
            guard let strongSelf = self else { return }
            if let keyboardFrame = noti.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue {
                strongSelf.constaint?.constant = -(keyboardFrame.cgRectValue.height - strongSelf.bottomSafeAreaHeight)
                print(keyboardFrame.cgRectValue.height)
            }
        }
        center.addObserver(forName: UIResponder.keyboardWillHideNotification, object: nil, queue: .main) { [weak self] _ in
            guard let strongSelf = self else { return }
            strongSelf.constaint?.constant = 0
        }
    }

    private func setupAutolayout() {
        NSLayoutConstraint.activate([
            textField.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            textField.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            textField.heightAnchor.constraint(equalToConstant: 44)
        ])
        constaint = textField.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        constaint?.isActive = true
    }

    @objc
    func handleTapGesture(recognizer: UITapGestureRecognizer) {
        textField.resignFirstResponder()
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
    func fetchData() {
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
