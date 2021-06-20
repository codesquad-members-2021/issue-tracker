//
//  UIAlertController+Extension.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/21.
//

import UIKit

extension UIAlertController {

   convenience init(title: String?,
                    message: String? = nil,
                    preferredStyle: Style = .alert) {
       self.init()
       addAction(UIAlertAction(title: "확인", style: .default))
   }
}
