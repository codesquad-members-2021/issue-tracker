//
//  IssueTableDelegate.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/09.
//

import UIKit

extension IssueListViewController: UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return UITableView.automaticDimension
    }

    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        
        let close = UIContextualAction(style: .normal, title: "Close") { action, view, completion in
            completion(true)
        }
        close.image = UIImage(systemName: "archivebox")
        
        let delete = UIContextualAction(style: .destructive, title: "Delete") { action, view, completion in
            NotificationCenter.default.post(name: .deleteIssue, object: nil, userInfo: ["index": indexPath])
            completion(true)
        }
        delete.image = UIImage(systemName: "trash")
        
        let configuration = UISwipeActionsConfiguration(actions: [delete, close])
        configuration.performsFirstActionWithFullSwipe = false
        return configuration
    }
    
}
