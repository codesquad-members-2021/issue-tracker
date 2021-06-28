//
//  MoreInfoCell.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/12.
//

import UIKit

class MoreInfoCell: UITableViewCell {
    @IBOutlet private weak var titleLabel: UILabel!
    @IBOutlet private weak var infoLabel: UILabel!
    
    var viewModel = ViewModel() {
        didSet {
            titleLabel.text = viewModel.title
            infoLabel.text = viewModel.info
        }
    }
}

extension MoreInfoCell {
    struct ViewModel {
        var title = ""
        var info = ""
    }
}

extension MoreInfoCell.ViewModel {
    init(moreInfo: MoreInfo) {
        title = moreInfo.title
        info = moreInfo.info
    }
}
