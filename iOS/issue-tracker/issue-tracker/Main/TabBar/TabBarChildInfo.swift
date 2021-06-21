//
//  IssueTrackerChildViewControllerInfo.swift
//  issue-tracker
//
//  Created by Song on 2021/06/11.
//

import UIKit

struct TabBarChildInfo {
    let title: String
    let image: UIImage?
    let type: UIViewController.Type
    
    init(title: String, imageName: String, type: UIViewController.Type) {
        self.title = title
        self.image = UIImage(systemName: imageName)
        self.type = type
    }
    
    init(title: String, image: UIImage, type: UIViewController.Type) {
        self.title = title
        self.image = image
        self.type = type
    }
}
