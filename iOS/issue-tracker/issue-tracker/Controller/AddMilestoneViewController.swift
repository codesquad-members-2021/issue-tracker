//
//  AddMilestoneViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/17.
//

import UIKit
import RxSwift

class AddMilestoneViewController: UIViewController {

    private let disposeBag = DisposeBag()
    private let viewModel: MilestoneViewModel! = MilestoneViewModel.shared
    private lazy var tableView: UITableView = {
        let tableView = UITableView(frame: .zero, style: .grouped)
        tableView.register(AddMilestoneTableViewCell.self, forCellReuseIdentifier: AddMilestoneTableViewCell.reuseIdentifier)
        return tableView
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.title = "새로운 마일스톤"
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "뒤로",
                                                                style: .plain,
                                                                target: self,
                                                                action: #selector(didTapCancel))
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "저장",
                                                                 style: .plain,
                                                                 target: self,
                                                                 action: #selector(didTapSave))

        tableView.dataSource = self
        tableView.frame = view.bounds

        view.addSubview(tableView)
        viewModel.completion = {
            self.dismiss(animated: true)
        }
    }

    @objc
    private func didTapSave() {
        viewModel.post()
    }

    @objc
    private func didTapCancel() {
        dismiss(animated: true)
    }
}

extension AddMilestoneViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: AddMilestoneTableViewCell.reuseIdentifier, for: indexPath) as? AddMilestoneTableViewCell else {
            fatalError()
        }
        if indexPath.row == 0 {
            cell.becomeFirstResponder()
        }
        let textLabel = ["제목", "설명", "완료일"]
        let keys = ["title", "description", "dueDate"]
        cell.textLabel?.text = textLabel[indexPath.row]
        cell.bind { textField in
            textField.rx.text
                .orEmpty
                .observe(on: MainScheduler.instance)
                .distinctUntilChanged()
                .debounce(.milliseconds(500), scheduler: MainScheduler.instance)
                .subscribe(onNext: { text in
                    let key = keys[indexPath.row]
                    self.viewModel.milestone[key] = text
                })
                .disposed(by: disposeBag)
        }
        return cell
    }
}
