//
//  AlertFactory.swift
//  issue-tracker
//
//  Created by Song on 2021/06/10.
//

import UIKit

struct AlertFactory {
    static func create(body: String, okMessage: String? = "확인") -> UIAlertController {
        let alert = UIAlertController(title: nil, message: body, preferredStyle: .alert)
        let okAction = UIAlertAction(title: okMessage, style: .default, handler: nil)
        alert.addAction(okAction)
        return alert
    }
}
