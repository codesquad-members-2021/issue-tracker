//
//  CommonTableDelegate.swift
//  issue-tracker
//
//  Created by jinseo park on 6/21/21.
//

import UIKit

final class CommonTableDelegate: NSObject, UITableViewDelegate {
    
    typealias CellActionHandler = (Int, CellAction) -> Void
    private var cellActionHandler: CellActionHandler
    private var cellHeight: CGFloat
    
    init(cellActionHandler: @escaping CellActionHandler, cellHeight: CGFloat) {
        self.cellActionHandler = cellActionHandler
        self.cellHeight = cellHeight
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return self.cellHeight
    }
    
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let deleteAction = UIContextualAction(style: .destructive,
                                              title: CellAction.delete.buttonTitle()) { [weak self] _, _, _ in
            self?.cellActionHandler(indexPath.row, .delete)
        }
        deleteAction.image = UIImage(systemName: "trash")
        
        let editAction = UIContextualAction(style: .normal,
                                            title: CellAction.edit.buttonTitle()) { [weak self] _, _, _ in
            self?.cellActionHandler(indexPath.row, .edit)
        }
        editAction.image = UIImage(systemName: "pencil")
        
        return UISwipeActionsConfiguration(actions: [deleteAction,editAction])
    }
}
