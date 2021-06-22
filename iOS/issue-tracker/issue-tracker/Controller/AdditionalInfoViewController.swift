//
//  AdditionalInfoViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/21.
//

import UIKit

class AdditionalInfoViewController: UITableViewController {
    // temp
    let data = ["enhancement", "bug", "feature"]
    var setupSelectedData: ((String) -> Void)?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        tableView.register(DetailTextStyleTableViewCell.self, forCellReuseIdentifier: "reuseIdentifier")

        self.navigationItem.leftBarButtonItem
            = UIBarButtonItem(title: "취소", style: .done, target: self, action: #selector(didTapCancel))
        self.navigationItem.rightBarButtonItem
            = UIBarButtonItem(title: "저장", style: .done, target: self, action: #selector(didTapSave))
    }

    // MARK: - Table view data source

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return data.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "reuseIdentifier", for: indexPath)
        cell.textLabel?.text = data[indexPath.row]
        return cell
    }

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let cell = tableView.cellForRow(at: indexPath)
        cell?.accessoryType = .checkmark
    }

    override func tableView(_ tableView: UITableView, didDeselectRowAt indexPath: IndexPath) {
        let selected = tableView.cellForRow(at: indexPath)
        selected?.accessoryType = .none
    }

    override func tableView(_ tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
        return UIView()
    }
}

private extension AdditionalInfoViewController {
    @objc
    func didTapCancel() {
        dismiss(animated: true)
    }

    @objc
    func didTapSave() {
        guard let indexPath = tableView.indexPathForSelectedRow else {
            didTapCancel()
            return
        }
        setupSelectedData?(data[indexPath.row])
        didTapCancel()
    }
}
