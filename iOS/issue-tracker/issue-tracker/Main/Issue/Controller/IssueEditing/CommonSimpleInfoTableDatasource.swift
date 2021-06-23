//
//  CommonSimpleInfoTableDatasource.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class CommonSimpleInfoTableDatasource<InfoCell: UITableViewCell,
                                            Info: Identifiable>: NSObject, SimpleInfoTableDatasource {
    
    private var infos = [Info]()
    private var cellUpdator: CellUpdator?
    
    func update(with infos: [Info]) {
        self.infos = infos
    }
    
    func info(for index: Int) -> Info? {
        guard infos.count > index else { return nil }
        return infos[index]
    }
    
    func index(for targetInfo: Info) -> Int? {
        var targetIndex: Int?
        infos.enumerated().forEach { (index, info) in
            if info.identifier() == targetInfo.identifier() {
                targetIndex = index
            }
        }
        return targetIndex
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return infos.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellID = InfoCell.reuseID
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) as? InfoCell ?? InfoCell()
        guard let cellInfo = info(for: indexPath.row),
              let cellUpdator = cellUpdator else { return cell }
        return cellUpdator(cell, cellInfo)
    }
    
    func setCellUpdator(_ updator: @escaping (InfoCell, Info) -> InfoCell) {
        self.cellUpdator = updator
    }
}
