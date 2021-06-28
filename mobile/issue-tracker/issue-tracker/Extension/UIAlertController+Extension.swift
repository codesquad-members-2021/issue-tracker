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
        let confirmAction = UIAlertAction(title: "확인", style: .default, handler: nil)
        addAction(confirmAction)
    }
}
