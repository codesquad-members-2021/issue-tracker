//
//  AdditionalInfoTableViewDataSource.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/09.
//

import UIKit

class AdditionalTableViewDataSource: NSObject, UITableViewDataSource {
    
    private let titles = ["레이블", "마일스톤", "담당자"]
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return titles.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: AdditionalTableViewCell.reuseIdentifier,
                                                       for: indexPath) as? AdditionalTableViewCell
        else {
            return UITableViewCell()
        }
        cell.titleLabel.text = titles[indexPath.row]
        return cell
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return "추가정보"
    }

}
