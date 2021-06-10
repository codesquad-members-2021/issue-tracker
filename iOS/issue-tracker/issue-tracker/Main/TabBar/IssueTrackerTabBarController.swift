//
//  IssueTrackerTabBarController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit
import KeychainAccess

class IssueTrackerTabBarController: UITabBarController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tabBar.tintColor = Colors.mainGrape
        
        let items = [TabBarViewControllerInfo(title: "이슈", imageName: "exclamationmark.circle", type: IssueViewController.self),
                     TabBarViewControllerInfo(title: "레이블", imageName: "tag", type: LabelViewController.self),
                     TabBarViewControllerInfo(title: "마일스톤", imageName: "signpost.right", type: MilestoneViewController.self),
                     TabBarViewControllerInfo(title: "내 계정", imageName: "person.circle", type: MyAccountViewController.self)
        ]
        
        let viewControllers = items.map{ createTabBarViewController(info: $0) }
        setViewControllers(viewControllers, animated: true)
        
        let keychain = Keychain()
        print("잘 지정됐는지 테스트하기!", keychain["github_jwt"], keychain["github_avatarUrl"], keychain["github_loginId"] )
    }
    
    struct TabBarViewControllerInfo {
        let title: String
        let image: UIImage?
        let type: UIViewController.Type
        
        init(title: String, imageName: String, type: UIViewController.Type) {
            self.title = title
            self.image = UIImage(systemName: imageName)
            self.type = type
        }
    }
    
    private func createTabBarViewController(info: TabBarViewControllerInfo) -> UIViewController {
        let tabBarItem = UITabBarItem(title: info.title, image: info.image, selectedImage: nil)
        let viewController = info.type.create()
        viewController.tabBarItem = tabBarItem
        return viewController
    }
    
}
