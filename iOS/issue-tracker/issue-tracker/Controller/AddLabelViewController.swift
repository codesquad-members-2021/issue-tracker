//
//  AddViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/10.
//

import UIKit
import RxSwift
import RxCocoa
import SnapKit

final class AddLabelViewController: UIViewController {
    private var addLabelViewModel: AddLabelViewModel!
    private lazy var tableView: UITableView = {
        let tableView = UITableView(frame: .zero, style: .grouped)
        tableView.allowsSelection = false
        tableView.register(AddLabelTableViewCell.self, forCellReuseIdentifier: AddLabelTableViewCell.identifier)
        return tableView
    }()
    private var estimatedLabelView = EstimatedLabelView()
    private var bag = DisposeBag()
    private var saveButton = UIBarButtonItem(title: "저장", style: .plain, target: nil, action: nil)
    private var cancelButton = UIBarButtonItem(title: "뒤로", style: .plain, target: nil, action: nil)
    var reloadDataHandler: (() -> Void)?

    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = #colorLiteral(red: 0.9494308829, green: 0.9485411048, blue: 0.9703034759, alpha: 1)
        self.addLabelViewModel = AddLabelViewModel(networkManager: NetworkManager())

        navigationItem.title = "새로운 레이블"
        self.navigationItem.leftBarButtonItem = cancelButton
        self.navigationItem.rightBarButtonItem = saveButton

        tableView.dataSource = self
        view.addSubview(tableView)
        view.addSubview(estimatedLabelView)
        configureAutolayout()
        binding()
        bindButton()
    }

    private func binding() {
        addLabelViewModel.color
            .map { UIColor.hexStringToUIColor(hex: $0)}
            .bind(to: estimatedLabelView.getLabel().rx.backgroundColor)
            .disposed(by: bag)
    }

    func bindButton() {
        saveButton.rx.tap
            .subscribe { [weak self] _ in
                guard let viewModel = self?.addLabelViewModel else { return }
                if viewModel.title.value == "" || viewModel.description.value == "" {
                    CustomAlertView.shared.setUpAlertView(title: "실패", message: "필수 입력란이 비었습니다. 다시 한번 확인해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
                } else {
                    viewModel.postAddedLabel {
                        self?.dismiss(animated: true, completion: nil)
                    }
                }
            }
            .disposed(by: bag)

        cancelButton.rx.tap
            .subscribe { [weak self] _ in
                self?.dismiss(animated: true, completion: nil)
            }
            .disposed(by: bag)
    }

    private func configureAutolayout() {
        tableView.snp.makeConstraints { view in
            view.top.equalToSuperview().inset(40)
            view.leading.trailing.bottom.equalToSuperview()
        }

        estimatedLabelView.snp.makeConstraints { view in
            view.leading.trailing.equalToSuperview().inset(16)
            view.centerX.centerY.equalToSuperview()
            view.height.equalTo(160)
        }
    }
}

extension AddLabelViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: AddLabelTableViewCell.identifier, for: indexPath) as? AddLabelTableViewCell else { return UITableViewCell() }
        switch indexPath.row {
        case 0:
            cell.textLabel?.text = "제목"
            cell.configureTextFieldPlaceHolder(text: "(필수입력)")
            cell.textField.rx.text
                .orEmpty
                .distinctUntilChanged()
                .observe(on: MainScheduler.instance)
                .bind(to: addLabelViewModel.title)
                .disposed(by: bag)
            return cell
        case 1:
            cell.textLabel?.text = "설명"
            cell.configureTextFieldPlaceHolder(text: "(선택사항)")
            cell.textField.rx.text
                .orEmpty
                .distinctUntilChanged()
                .observe(on: MainScheduler.instance)
                .bind(to: addLabelViewModel.description)
                .disposed(by: bag)
            return cell
        case 2:
            cell.textLabel?.text = "배경색"

            addLabelViewModel.color
                .bind(to: cell.textField.rx.text)
                .disposed(by: bag)

            cell.reloadButton.rx.tap
                .map { UIColor.getRandomColor().convertHexToString() }
                .bind(to: addLabelViewModel.color)
                .disposed(by: bag)

            cell.configureBackgroundCellMode()
            return cell
        default:
            fatalError()
        }
    }
}
