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

    var viewModel: IssueDetailViewModel = IssueDetailViewModel()

    private let cellReuseIdentifier = "IssueDetailCell"
    private let disposeBag = DisposeBag()
    private var comment: [Comment] = []
    private var textFieldHeightConstraint: NSLayoutConstraint?

    private let headerStackView: UIStackView = {
        let stackView = UIStackView(frame: CGRect(origin: .zero, size: CGSize(width: 1, height: 44)))
        stackView.axis = .vertical
        stackView.alignment = .leading
        stackView.spacing = 10
        return stackView
    }()

    private let isOpened: PaddingLabel = {
        let label = PaddingLabel(withInsets: 0, 0, 10, 10)
        label.textAlignment = .center
        label.backgroundColor = .systemPink
        label.textColor = .white
        label.layer.masksToBounds = true
        label.layer.cornerRadius = 10
        label.snp.makeConstraints { $0.width.greaterThanOrEqualTo(50) }
        return label
    }()

    private let authorLabel: UILabel = {
        let label = UILabel()
        label.numberOfLines = 0
        return label
    }()

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

        textField.textFieldDelegate = self
        tableView.dataSource = self
        tableView.delegate = self
        tableView.frame = view.bounds
        tableView.selectRow(at: IndexPath(row: 0, section: 0), animated: false, scrollPosition: .none)

        headerStackView.addArrangedSubview(isOpened)
        headerStackView.addArrangedSubview(authorLabel)

        tableView.tableHeaderView = headerStackView

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
                strongSelf.textFieldHeightConstraint?.constant = -(keyboardFrame.cgRectValue.height - strongSelf.bottomSafeAreaHeight)
                print(keyboardFrame.cgRectValue.height)
            }
        }
        center.addObserver(forName: UIResponder.keyboardWillHideNotification, object: nil, queue: .main) { [weak self] _ in
            guard let strongSelf = self else { return }
            strongSelf.textFieldHeightConstraint?.constant = 0
        }
    }

    private func setupAutolayout() {
        headerStackView.snp.makeConstraints { $0.leading.trailing.top.bottom.equalToSuperview().inset(20) }
        NSLayoutConstraint.activate([
            textField.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 10),
            textField.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -10),
            textField.heightAnchor.constraint(equalToConstant: 44)
        ])
        textFieldHeightConstraint = textField.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        textFieldHeightConstraint?.isActive = true
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
        viewModel.subject.bind { [weak self] detail in
            guard let detail = detail?.data else { return }
            self?.navigationItem.title = detail.title
            self?.isOpened.text = detail.isOpen ? "열림" : "닫힘"
            self?.authorLabel.text = "\(detail.author.name)님이 작성했습니다."
            guard let comment = detail.comment else { return }
            self?.comment = comment
            self?.tableView.reloadData()
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

extension IssueDetailViewController: ToolBarTextFieldDelegate {
    func register() {
        guard let comment = textField.text else {
            return
        }
        viewModel.post(comment: comment)
    }
}
