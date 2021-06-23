//
//  CellSelectionTableDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import UIKit

final class CellSelectionTableDelegate: NSObject, SimpleInfoTableDelegate {
    
    private var cellSelectionHandler: CellSelectionHandler?
    
    func setCellSelectionHandler(_ handler: @escaping CellSelectionHandler) {
        self.cellSelectionHandler = handler
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        reportCellSelection(index: indexPath.row,
                            selectionStatus: CellSelection.selected)
    }
    
    func tableView(_ tableView: UITableView, didDeselectRowAt indexPath: IndexPath) {
        reportCellSelection(index: indexPath.row,
                            selectionStatus: CellSelection.deSelected)
    }
    
    private func reportCellSelection(index: Int, selectionStatus: CellSelection) {
        guard let cellSelectionHandler = cellSelectionHandler else { return }
        cellSelectionHandler(index, selectionStatus)
    }
}
