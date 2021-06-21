//
//  NewIssueViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/11.
//

import UIKit
import SnapKit
import MarkdownKit
import RxSwift

class NewIssueViewController: UIViewController {
    private let additionalInfo = ["레이블", "마일스톤", "담당자"]
    private let cellReuseIdentifier = "NewIssueViewCell"
    private let markdownParser = MarkdownParser()
    private var viewModel = NewIssueViewModel()
    private let disposeBag = DisposeBag()

    private let subject: UILabel = {
        let label = UILabel()
        label.text = "제목"
        return label
    }()

    private let subjectTextField: UITextField = {
        let textField = UITextField()
        textField.becomeFirstResponder()
        textField.placeholder = "제목을 입력하세요."
        return textField
    }()

    private let tableView: UITableView = {
        let tableView = UITableView()
        tableView.rowHeight = 44.0
        tableView.isScrollEnabled = false
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "NewIssueViewCell")
        return tableView
    }()

    private let saveButton = UIBarButtonItem(title: "저장", style: .plain, target: self, action: #selector(didTapSave))
    private let segmentedControl = UISegmentedControl(items: ["마크다운", "미리보기"])
    private let contentTextView: UITextView = {
        let textView = UITextView()
        textView.text = "코멘트는 여기에 입력하세요."
        return textView
    }()

    private var textString: String?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground

        tableView.dataSource = self
        tableView.delegate = self

        navigationItem.largeTitleDisplayMode = .never
        navigationItem.rightBarButtonItem = saveButton
        navigationItem.titleView = segmentedControl

        segmentedControl.selectedSegmentIndex = 0
        segmentedControl.addTarget(self, action: #selector(reload), for: .valueChanged)

        view.addSubview(subject)
        view.addSubview(subjectTextField)
        view.addSubview(contentTextView)
        view.addSubview(tableView)

        setupAutolayout()
        bind()
    }

    private func bind() {
        subjectTextField.rx.text
            .orEmpty
            .distinctUntilChanged()
            .bind(onNext: { [unowned self] title in
                viewModel.title = title
            })
            .disposed(by: disposeBag)

        contentTextView.rx.text
            .orEmpty
            .distinctUntilChanged()
            .bind(onNext: { [unowned self] text in
                viewModel.content = text
            })
            .disposed(by: disposeBag)
    }

    private func setupAutolayout() {
        subject.snp.makeConstraints { maker in
            maker.leading.top.equalTo(view.safeAreaLayoutGuide).inset(20)
            maker.width.equalTo(70)
        }
        subjectTextField.snp.makeConstraints { maker in
            maker.leading.equalTo(subject.snp.trailing)
            maker.trailing.equalTo(view.safeAreaLayoutGuide).inset(20)
            maker.height.equalTo(44)
            maker.centerY.equalTo(subject.snp.centerY)
        }
        contentTextView.snp.makeConstraints { maker in
            maker.top.equalTo(subjectTextField.snp.bottom)
            maker.leading.trailing.equalTo(view.safeAreaLayoutGuide).inset(20)
            maker.height.equalTo(440)
        }
        tableView.snp.makeConstraints { maker in
            maker.top.equalTo(contentTextView.snp.bottom)
            maker.leading.trailing.equalTo(view.safeAreaLayoutGuide)
            maker.bottom.equalTo(view.safeAreaLayoutGuide)
        }
    }

    @objc
    func didTapSave(sender: UIButton) {
        guard let title = subjectTextField.text, let content = contentTextView.text, !title.isEmpty, !content.isEmpty else {
            let alert = UIAlertController(title: "Oops!", message: "제목과 내용을 모두 입력해주세요!", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "확인", style: .default))
            self.present(alert, animated: true)
            return
        }
        viewModel.post { [weak self] in
            self?.navigationController?.popViewController(animated: true)
        }
    }

    @objc
    func reload(sender: UISegmentedControl) {
        switch sender.selectedSegmentIndex {
        case 0:
            contentTextView.text = textString
        case 1:
            textString = contentTextView.text
            contentTextView.attributedText = markdownParser.parse(contentTextView.text)
        default:
            break
        }
    }
}

extension NewIssueViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath)
        cell.selectionStyle = .none
        cell.textLabel?.text = additionalInfo[indexPath.row]
        cell.accessoryType = .disclosureIndicator
        return cell
    }
}

extension NewIssueViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let vc = AdditionalInfoViewController()
        navigationController?.pushViewController(vc, animated: true)
    }

    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return "추가 정보"
    }

    func tableView(_ tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
        return UIView()
    }
}
