//
//  UIBarButtonItem+setTitle.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/14.
//

import UIKit

extension UIBarButtonItem {
    func setTitle(_ title: String?, for state: UIControl.State) {
        let button = self.customView as? UIButton ?? UIButton()
        button.setTitle(title, for: state)
    }
    
    func setIsHidden(_ hidden: Bool, animated: Bool) {
        let button = self.customView as? UIButton ?? UIButton()
        button.setIsHidden(hidden, animated: animated)
    }
}
