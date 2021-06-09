//
//  IssueTableDelegate.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/09.
//

import UIKit

class IssueTableDelegate: NSObject, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return UITableView.automaticDimension
    }

    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {

            let share = UIContextualAction(style: .normal, title: "Share") { action, view, completion in
                completion(true)
            }

            let delete = UIContextualAction(style: .destructive, title: "Delete") { [weak self] action, view, completion in
//                tableView.dataSource?.issues.remove(at: indexPath.row)
//                tableView.deleteRows(at: [indexPath], with: UITableView.RowAnimation.automatic)
                completion(true)
            }

        let configuration = UISwipeActionsConfiguration(actions: [delete, share])
        configuration.performsFirstActionWithFullSwipe = false
        return configuration
    }
    
}
