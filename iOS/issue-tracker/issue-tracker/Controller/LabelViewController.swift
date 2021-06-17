//
//  LabelViewController.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit
import RxSwift
import RxCocoa

class LabelViewController: UIViewController {

    @IBOutlet weak var labelTableView: UITableView!
    
    var labelListViewModel = LabelListViewModel(networkManager: NetworkManager())
    var addLabelButton = AddLabelButton()
    var bag = DisposeBag()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        seuptNavigationBar()
        labelTableView.register(LabelTableViewCell.self, forCellReuseIdentifier: LabelTableViewCell.identifier)
        addLabelButton.addTarget(self, action: #selector(addLabelButtonTapped), for: .touchUpInside)
        fetchLabel()
        bindTableView()
    }
    
    func fetchLabel() {
        labelListViewModel.fetchLabelList()
    }
    
    func bindTableView() {
        labelListViewModel.labelList.bind(to: labelTableView.rx.items) { tableView, index, element in
            guard let cell = tableView.dequeueReusableCell(withIdentifier: LabelTableViewCell.identifier) as? LabelTableViewCell else { return UITableViewCell()}
            cell.setLabelCell(title: element.title, description: element.description!, color: element.color)
            return cell
        }
        .disposed(by: bag)
    }
    
    @objc func addLabelButtonTapped() {
        let vc = AddLabelViewController()
        let nv = UINavigationController(rootViewController: vc)
        present(nv, animated: true, completion: nil)
    }
    
    func seuptNavigationBar() {
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "레이블"
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: addLabelButton)
    }
}

extension LabelViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return fakeData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: LabelTableViewCell.identifier) as? LabelTableViewCell else { return UITableViewCell() }
        cell.setupLabelCell(title: fakeData[indexPath.row].title, description: fakeData[indexPath.row].description, color: fakeData[indexPath.row].color)
        
        return cell
    }
}
