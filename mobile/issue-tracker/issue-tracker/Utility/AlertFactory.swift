//
//  AlertFactory.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import UIKit

enum Alert {
    static func create(title: String) -> UIAlertController {
        let controller = UIAlertController(title: title, message: nil, preferredStyle: .alert)
        controller.addAction(UIAlertAction(title: "확인", style: .default, handler: nil))
        return controller
    }
}
