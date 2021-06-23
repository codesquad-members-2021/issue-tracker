//
//  UITableCellExtension.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

extension UITableViewCell {
    static var reuseID: String {
        return String(describing: self)
    }
}

