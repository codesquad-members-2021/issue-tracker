//
//  UIButton + Extension.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/10.
//

import UIKit

extension UIButton {
    static func setButton(image: String?, title: String) -> UIButton {
        let button = UIButton()
        button.setTitle(title, for: .normal)
        button.setTitleColor(UIColor(red: 0, green: 0.478, blue: 1, alpha: 1), for: .normal)
        guard let imageName = image else {
            return button
        }
        button.setImage(UIImage(named: imageName), for: .normal)
        
        return button
    }
}
