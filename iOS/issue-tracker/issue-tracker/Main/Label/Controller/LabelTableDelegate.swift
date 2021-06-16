//
//  LabelTableDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import UIKit

final class LabelTableDelegate: NSObject, UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 118
    }
}
