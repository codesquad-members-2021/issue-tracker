//
//  LabelViewController.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import RxSwift
import RxCocoa

final class LabelViewController: UIViewController {

    @IBOutlet weak var labelTableView: UITableView!

    private var labelListViewModel = LabelListViewModel(networkManager: NetworkManager())
    private var addLabelButton = AddLabelButton()
    private var bag = DisposeBag()

    override func viewDidLoad() {
        super.viewDidLoad()
        seuptNavigationBar()
        labelTableView.register(LabelTableViewCell.self, forCellReuseIdentifier: LabelTableViewCell.identifier)
        labelTableView.separatorStyle = .none
        addLabelButton.addTarget(self, action: #selector(addLabelButtonTapped), for: .touchUpInside)
        fetchLabel()
        bindTableView()
    }

    private func fetchLabel() {
        labelListViewModel.fetchLabelList()
    }

    private func bindTableView() {
        labelListViewModel.labelList.bind(to: labelTableView.rx.items) { tableView, _, element in
            guard let cell = tableView.dequeueReusableCell(withIdentifier: LabelTableViewCell.identifier) as? LabelTableViewCell else { return UITableViewCell()}
            cell.setupLabelCell(title: element.title, description: element.description!, color: element.color)
            cell.contentView.backgroundColor = .systemYellow
            return cell
        }
        .disposed(by: bag)
    }

    @objc private func addLabelButtonTapped() {
        let viewController = AddLabelViewController()
        let navigationViewController = UINavigationController(rootViewController: viewController)
        viewController.reloadDataHandler = { [weak self] in
            self?.labelListViewModel.fetchLabelList()
        }
        present(navigationViewController, animated: true, completion: nil)
    }

    private func seuptNavigationBar() {
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "레이블"
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: addLabelButton)
    }
}
