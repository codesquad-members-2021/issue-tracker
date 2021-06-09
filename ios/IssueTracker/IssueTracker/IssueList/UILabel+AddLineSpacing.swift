//
//  UILabel+AddLineSpacing.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/09.
//

import UIKit

extension UILabel {

    func addLineSpacing(_ spacingValue: CGFloat = 3) {
        
        guard let textString = self.text else { return }

        let attributedString = NSMutableAttributedString(string: textString)
        let paragraphStyle = NSMutableParagraphStyle()
        
        paragraphStyle.lineSpacing = spacingValue
        attributedString.addAttribute(.paragraphStyle, value: paragraphStyle, range: NSRange(location: 0, length: attributedString.length))
        
        self.attributedText = attributedString
    }
    
}
