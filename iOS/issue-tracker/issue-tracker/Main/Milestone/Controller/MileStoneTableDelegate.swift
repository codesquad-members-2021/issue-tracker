//
//  MileStoneTableDelegate.swift
//  issue-tracker
//
//  Created by jinseo park on 6/18/21.
//
import UIKit

class MileStoneTableDelegate: NSObject, UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return tableView.frame.height * 0.336
    }
}
