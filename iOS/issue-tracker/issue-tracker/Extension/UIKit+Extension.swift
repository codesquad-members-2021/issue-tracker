//
//  UIKit+Extension.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/13.
//

import UIKit

extension UIViewController {
    var statusBarHeight: CGFloat {
        guard let statusBarHeight = view.window?.windowScene?.statusBarManager?.statusBarFrame.height else { return 0 }
        return statusBarHeight
    }
    
    var topBarHeight: CGFloat {
        return statusBarHeight + (navigationController?.navigationBar.frame.height ?? 0)
    }
    
    var bottomSafeAreaHeight: CGFloat {
        return view.safeAreaInsets.bottom
    }
}
