//
//  LabelTableDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import UIKit

final class LabelTableDelegate: NSObject, UITableViewDelegate {
    
    private let superViewFrame: CGRect
    
    init(superViewFrame: CGRect) {
        self.superViewFrame = superViewFrame
    }

    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return superViewFrame.height * 0.135
    }
}
