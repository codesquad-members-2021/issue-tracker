//
//  SimpleLabelTableDatasource.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class SimpleLabelTableDatasource: NSObject, SimpleInfoTableDatasource {

    private var labels = [Label]()
    
    func update(with infos: [Identifiable]) {
        guard let labels = infos as? [Label] else { return }
        self.labels = labels
    }
    
    func info(for index: Int) -> Identifiable? {
        guard labels.count > index else { return nil }
        return labels[index]
    }
    
    func index(for info: Identifiable) -> Int? {
        var targetIndex: Int?
        labels.enumerated().forEach { (index, label) in
            if label.identifier() == info.identifier() {
                targetIndex = index
            }
        }
        return targetIndex
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return labels.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = SimpleLabelTableViewCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? SimpleLabelTableViewCell ?? SimpleLabelTableViewCell()
        let cellInfo = labels[indexPath.row]
        let hexColorCode = HexColorCode(from: cellInfo.hexColorCode)
        cell.configure(with: hexColorCode, title: cellInfo.title)
        return cell
    }
}
