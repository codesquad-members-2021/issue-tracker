//
//  UITabBarItem+Extension.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/13.
//

import UIKit

extension UITabBarItem {
    convenience init(type: TabBarItemType) {
        self.init(title: type.description,
                  image: UIImage(systemName: type.imageName),
                  selectedImage: UIImage(systemName: type.imageName))
    }
}
