//
//  SimpleInfoTableDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

enum CellSelection {
    case selected
    case deSelected
}

protocol SimpleInfoTableDelegate: UITableViewDelegate {
    typealias CellSelectionHandler = ((Int, CellSelection) -> Void)
    func setCellSelectionHandler(_ handler: @escaping CellSelectionHandler)
}
