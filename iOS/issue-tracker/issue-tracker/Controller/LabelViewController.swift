//
//  LabelViewController.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/09.
//

import UIKit

struct Label {
    let title: String
    let description: String
    let color: String
}

class LabelViewController: UIViewController {

    @IBOutlet weak var labelTableView: UITableView!
    
    var addLabelButton = AddLabelButton()
    
    let fakeData = [Label(title: "hidsfadsfsafasfdfadsf", description: "hello", color: "#B1CAE5"), Label(title: "wow", description: "amazing", color: "#DFCD85")]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setNavigationBar()
        labelTableView.register(LabelTableViewCell.self, forCellReuseIdentifier: LabelTableViewCell.identifier)
        labelTableView.dataSource = self
        addLabelButton.addTarget(self, action: #selector(addLabelButtonTapped), for: .touchUpInside)
    }
    
    @objc func addLabelButtonTapped() {
        
    }
    
    func setNavigationBar() {
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
        cell.setLabelCell(title: fakeData[indexPath.row].title, description: fakeData[indexPath.row].description, color: fakeData[indexPath.row].color)
        
        return cell
    }
    
    
}
