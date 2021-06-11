//
//  MilestoneViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/09.
//

import UIKit

@IBDesignable
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
        view.addSubview(tableView)
        
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "Milestone"
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addMilestone))
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        tableView.frame = view.bounds
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
