//
//  MilestoneViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/09.
//

import UIKit
import RxSwift
import RxCocoa

class MilestoneViewController: UIViewController {
    private let viewModel = MilestoneViewModel.shared
    private let disposeBag = DisposeBag()
    private let tableView: UITableView = {
        let tableView = UITableView()
        tableView.rowHeight = 150
        tableView.register(MilestoneTableViewCell.self, forCellReuseIdentifier: MilestoneTableViewCell.reuseId)
        tableView.separatorStyle = .none
        return tableView
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        tableView.delegate = self
        tableView.frame = view.bounds

        view.addSubview(tableView)

        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "마일스톤"
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addMilestone))

        setupObserver()
        setupCellConfiguration()
    }

    @objc func addMilestone() {
        let nav = UINavigationController(rootViewController: AddMilestoneViewController())
        present(nav, animated: true, completion: nil)
    }
}

private extension MilestoneViewController {
    func setupObserver() {
        viewModel
            .subject
            .subscribe(onNext: { [unowned self] _ in
                self.tableView.reloadData()
            })
            .disposed(by: disposeBag)
    }

    func setupCellConfiguration() {
        viewModel
            .subject
            .bind(to: tableView
                .rx
                .items(cellIdentifier: MilestoneTableViewCell.reuseId,
                        cellType: MilestoneTableViewCell.self)) { _, milestone, cell in
                cell.configure(with: milestone)
                cell.contentView.backgroundColor = .systemYellow
            }
            .disposed(by: disposeBag)
    }
}

extension MilestoneViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let delete = UIContextualAction(style: .destructive, title: "삭제", handler: { [unowned self] _, _, completion in
            let id = viewModel.subject.value[indexPath.row].id
            viewModel.delete(id: id)
            completion(true)
        })
        delete.image = UIImage(systemName: "trash")
        let edit = UIContextualAction(style: .normal, title: "수정", handler: { _, _, completion in
            completion(true)
        })
        edit.image = UIImage(systemName: "pencil")
        return UISwipeActionsConfiguration(actions: [delete, edit])
    }
}
