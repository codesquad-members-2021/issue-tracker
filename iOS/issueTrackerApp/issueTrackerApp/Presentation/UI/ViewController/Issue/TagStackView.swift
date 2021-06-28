//
//  TagStackView.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/09.
//

import UIKit

class TagStackView: UIStackView {

    public func addTag(tagLabel: UILabel) {
        tagLabel.translatesAutoresizingMaskIntoConstraints = false
        self.addArrangedSubview(tagLabel)
    }
    
    public func removeAllTags() {
        self.arrangedSubviews.forEach { (view) in
            view.removeFromSuperview()
        }
    }
}
