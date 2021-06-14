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
        definesPresentationContext = true
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        updateUserImage()
    }
    
    func configure(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
    
    private func updateUserImage() {
        
        guard let imageURL = self.loginInfo?.avatarURL else { return }
        imageLoadManager.load(from: imageURL) { cachePath in
            guard let userImage = UIImage(contentsOfFile: cachePath) else {return}
            DispatchQueue.main.async {
                self.addSubviewToLastTabItem(userImage)
            }
        }
    }
}

extension UITabBarController {
    
    func addSubviewToLastTabItem(_ image: UIImage) {
        
        if let lastTabBarButton = self.tabBar.subviews.last, let tabItemImageView = lastTabBarButton.subviews.first {
            if let accountTabBarItem = self.tabBar.items?.last {
                accountTabBarItem.selectedImage = nil
                accountTabBarItem.image = nil
            }
            let imgView = UIImageView()
            imgView.frame = tabItemImageView.frame
            imgView.layer.cornerRadius = tabItemImageView.frame.height/2
            imgView.layer.masksToBounds = true
            imgView.contentMode = .scaleAspectFill
            imgView.clipsToBounds = true
            imgView.image = image
            self.tabBar.subviews.last?.addSubview(imgView)
        }
    }
}
