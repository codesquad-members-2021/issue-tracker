//
//  MileStoneTableDelegate.swift
//  issue-tracker
//
//  Created by jinseo park on 6/18/21.
//
import UIKit

class MileStoneTableDelegate: NSObject, UITableViewDelegate {
    
    typealias CellActionHandler = (Int, CellAction) -> Void
    private var cellActionHandler: CellActionHandler
    
    init(cellActionHandler: @escaping CellActionHandler) {
        self.cellActionHandler = cellActionHandler
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return tableView.frame.height * 0.233
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
        
        /*넣은 UIContextualAction index의 역순으로 화면에 나타난다.
        [deleteAction,editAction] 를 넣었지만 실제 화면에서 Swipe-left 시
        편집,삭제 형태로 보여지게된다.
         */
        return UISwipeActionsConfiguration(actions: [deleteAction,editAction])
    }
}
