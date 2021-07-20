//
//  IssueLabel.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/07.
//

import UIKit

class IssueLabel: UILabel {

    private let paddingLeft: CGFloat = 8
    private let paddingRight: CGFloat = 8
    private let paddingTop: CGFloat = 5
    private let paddingBottom: CGFloat = 5

    override func drawText(in rect: CGRect) {
        let insets = UIEdgeInsets(top: paddingTop,
                                  left: paddingLeft,
                                  bottom: paddingBottom,
                                  right: paddingRight)
        super.drawText(in: rect.inset(by: insets))
    }

    override var intrinsicContentSize: CGSize {
        let size = super.intrinsicContentSize
        return CGSize(width: size.width + paddingLeft + paddingRight,
                      height: size.height + paddingTop + paddingBottom)
    }
}
