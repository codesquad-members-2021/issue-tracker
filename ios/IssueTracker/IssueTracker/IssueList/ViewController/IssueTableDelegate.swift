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
        
        let share = UIContextualAction(style: .normal, title: "Close") { action, view, completion in
            completion(true)
        }
        
        let delete = UIContextualAction(style: .destructive, title: "Delete") { action, view, completion in
            NotificationCenter.default.post(name: .deleteIssue, object: nil, userInfo: ["index": indexPath])
            completion(true)
        }
        
        let configuration = UISwipeActionsConfiguration(actions: [delete, share])
        configuration.performsFirstActionWithFullSwipe = false
        return configuration
    }
    
}
