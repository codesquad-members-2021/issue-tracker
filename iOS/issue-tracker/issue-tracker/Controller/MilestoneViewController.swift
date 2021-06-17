//
//  MilestoneViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/09.
//

import UIKit

class MilestoneViewController: UIViewController {

    private let tableView: UITableView = {
        let tableView = UITableView()
        tableView.rowHeight = 200
        tableView.register(MilestoneTableViewCell.self, forCellReuseIdentifier: MilestoneTableViewCell.reuseId)
        return tableView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
        tableView.frame = view.bounds
        view.addSubview(tableView)
        
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "마일스톤"
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addMilestone))
    }
    
    @objc func addMilestone() {
        let nav = UINavigationController(rootViewController: AddViewController())
        present(nav, animated: true, completion: nil)
    }
}

extension MilestoneViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: MilestoneTableViewCell.reuseId, for: indexPath)
        return cell
    }
}

extension MilestoneViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let delete = UIContextualAction(style: .destructive, title: "삭제", handler: { action, view, completion in
            completion(true)
        })
        delete.image = UIImage(systemName: "trash")
        let edit = UIContextualAction(style: .normal, title:  "수정", handler: { action, view, completion in
            completion(true)
        })
        edit.image = UIImage(systemName: "pencil")
        return UISwipeActionsConfiguration(actions:[delete, edit])
    }
}
