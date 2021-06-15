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
    }
    
    override func viewDidAppear(_ animated: Bool) {
        tabBar.tintColor = Colors.mainGrape
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
                self.addSubviewToMyAccountTabItem(userImage)
            }
        }
    }
}

extension UITabBarController {
    func addSubviewToMyAccountTabItem(_ image: UIImage) {
        //tabBar.tabBar.items?.last = MyAccountViewController
        guard let myAccountTabBarItem = self.tabBar.items?.last else {return}
        myAccountTabBarItem.image = nil
                
        
//        myAccountTabBarItem.image = image.resizedImage(size: CGSize(width: 28, height: 28))?.withRenderingMode(.alwaysOriginal)
//        myAccountTabBarItem.selectedImage = myAccountTabBarItem.image
//
        
        let imgView = UIImageView()
        imgView.frame = CGRect(x: 34.3333, y: 7.66667, width: 24.3333, height: 23.6667) //하드코딩값. 실제 myAccountTabBarItem.image.size를 정확하게 가져올 방법을 못찾음.
        imgView.layer.cornerRadius = 10
        imgView.layer.masksToBounds = true
        imgView.contentMode = .scaleAspectFill
        imgView.clipsToBounds = true
        imgView.image = image
        self.tabBar.subviews.last?.addSubview(imgView)
    }
}
