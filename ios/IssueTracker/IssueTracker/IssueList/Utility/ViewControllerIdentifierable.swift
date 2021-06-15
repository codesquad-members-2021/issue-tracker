//
//  ViewControllerIdentifierable.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/15.
//

import UIKit

protocol ViewControllerIdentifierable {
}

extension ViewControllerIdentifierable {
    static var storyboardName: String {
        return "Main"
    }
    
    static var storyboardID: String {
        return String(describing: self)
    }
    
    static var storyboard: UIStoryboard {
        return UIStoryboard(name: storyboardName, bundle: Bundle.main)
    }
}
