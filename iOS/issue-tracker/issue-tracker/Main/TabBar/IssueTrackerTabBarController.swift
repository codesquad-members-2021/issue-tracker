//
//  IssueTrackerTabBarController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class IssueTrackerTabBarController: UITabBarController {

    private var loginInfo: LoginInfo?
    private let imageLoadManager = ImageLoadManager()

    override func viewDidLoad() {
        super.viewDidLoad()
        tabBar.tintColor = Colors.mainGrape
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        updateUserImage()
    }
    
    func configure(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
    
    private func updateUserImage() {
        guard let imageURL = self.loginInfo?.avatarURL,
              let viewControllers = self.viewControllers,
              let myAccountViewController = viewControllers.compactMap({ $0 as? MyAccountViewController }).first else { return }
        
        imageLoadManager.load(from: imageURL) { cachePath in
            guard let userImage = UIImage(contentsOfFile: cachePath),
                  let iconSize = myAccountViewController.tabBarItem.image?.size else { return }
            
            let resizedUserImage = userImage.resizedImage(size: iconSize)
            
            DispatchQueue.main.async {
                myAccountViewController.tabBarItem.image = resizedUserImage
            }
        }
    }
    
}
