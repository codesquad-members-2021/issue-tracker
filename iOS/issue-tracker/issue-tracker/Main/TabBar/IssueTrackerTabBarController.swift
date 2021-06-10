//
//  IssueTrackerTabBarController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class IssueTrackerTabBarController: UITabBarController {
    
    private var loginManager: LoginKeyChainManager?
    private var loginInfo: LoginInfo?

    override func viewDidLoad() {
        super.viewDidLoad()
        tabBar.tintColor = Colors.mainGrape
        
        let items = [TabBarViewControllerInfo(title: "이슈", imageName: "exclamationmark.circle", type: IssueViewController.self),
                     TabBarViewControllerInfo(title: "레이블", imageName: "tag", type: LabelViewController.self),
                     TabBarViewControllerInfo(title: "마일스톤", imageName: "signpost.right", type: MilestoneViewController.self),
                     TabBarViewControllerInfo(title: "내 계정", imageName: "person.circle", type: MyAccountViewController.self)]
        
        let viewControllers = items.map{ createTabBarViewController(info: $0) }
        setViewControllers(viewControllers, animated: true)
    }
    
    private struct TabBarViewControllerInfo {
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
    
    func configure(loginManager: LoginKeyChainManager, loginInfo: LoginInfo) {
        self.loginManager = loginManager
        self.loginInfo = loginInfo
        handOutLoginInfo()
    }

    private func handOutLoginInfo() {
        guard let loginInfo = self.loginInfo else { return }
        let loginInfoContainers = viewControllers?.compactMap{ $0 as? LoginInfoContainer }
        loginInfoContainers?.forEach({ loginInfoContainer in
            loginInfoContainer.setup(loginInfo: loginInfo)
        })
    }
    
}
