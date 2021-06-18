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


extension UILabel {
    
    private func fadeTransition(_ duration: CFTimeInterval) {
        let animation = CATransition()
        animation.timingFunction = CAMediaTimingFunction(name: CAMediaTimingFunctionName.easeInEaseOut)
        animation.type = CATransitionType.fade
        animation.duration = duration
        layer.add(animation, forKey: CATransitionType.fade.rawValue)
    }
    
    func textWithAnimation(text: String, _ duration: CFTimeInterval) {
        fadeTransition(duration)
        self.text = text
    }

}
