//
//  UITextFieldExtension.swift
//  issue-tracker
//
//  Created by Song on 2021/06/18.
//

import UIKit

extension UITextField {
    func isEmpty() -> Bool {
        if let text = self.text, text.count > 0 {
            return false
        } else {
            return true
        }
    }
}
