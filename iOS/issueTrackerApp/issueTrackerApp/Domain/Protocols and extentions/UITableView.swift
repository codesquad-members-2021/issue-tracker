//
//  UITableView.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/13.
//

import UIKit

extension UITableView {
    func dequeueReusableCell<Cell: UITableViewCell>(for indexPath: IndexPath) -> Cell {
        return dequeueReusableCell(withIdentifier: String(describing: Cell.self), for: indexPath) as! Cell
    }
}
