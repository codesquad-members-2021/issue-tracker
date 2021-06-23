//
//  LabelTableViewDatasource.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import UIKit

final class LabelTableViewDatasource: NSObject, UITableViewDataSource {
    
    private(set) var labels = [Label]()
    private let colorConverter = HexColorConverter()
    
    func update(labels: [Label]) {
        self.labels = labels
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return labels.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = LabelTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? LabelTableViewCell ?? LabelTableViewCell()
        let label = labels[indexPath.row]
        let hex = HexColorCode(from: label.hexColorCode)
        let backgroundColor = colorConverter.convertHex(hex)
        let titleColor = colorConverter.isColorDark(hex: hex) ? UIColor.white : UIColor.black
        cell.configure(with: backgroundColor, titleColor, label.title, label.body ?? "")
        return cell
    }
}
