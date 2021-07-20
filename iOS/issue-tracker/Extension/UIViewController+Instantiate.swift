//
//  UIViewController+Instantiate.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/09.
//

import UIKit

extension UIViewController {

    static func instantiate(name: String, bundle: Bundle? = nil) -> Self? {
        let fullName = NSStringFromClass(self)
        if fullName.components(separatedBy: ".").count < 1 {
            return nil
        }
        let className = fullName.components(separatedBy: ".")[1]
        let storyboard = UIStoryboard(name: name, bundle: bundle)
        return storyboard.instantiateViewController(withIdentifier: className) as? Self
    }
    
}
