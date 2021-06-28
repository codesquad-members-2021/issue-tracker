//
//  UIStoryBoard+Extension.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import UIKit

extension UIStoryboard {
    func create<T: UIViewController>(name: String, type: T.Type) -> T {
        let storyBoard = UIStoryboard(name: name, bundle: nil)
        guard let viewController = storyBoard.instantiateViewController(withIdentifier: name) as? T else {
            return T()
        }
        return viewController
    }
}
