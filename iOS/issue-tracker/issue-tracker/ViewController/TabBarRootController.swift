//
//  TabBarRootController.swift
//  issue-tracker
//
//  Created by user on 2021/06/17.
//

import UIKit

class TabBarRootController: UITabBarController {

    private var userInfoViewModel = UserInfoViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        bind()
    }
    
    func bind() {
        userInfoViewModel.configureThumbnailImage()
        userInfoViewModel.didUpdateThumbnailImage { url in

        }
    }
}
