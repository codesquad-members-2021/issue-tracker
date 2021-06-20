//
//  IssueTrackerTabBarCreator.swift
//  issue-tracker
//
//  Created by Song on 2021/06/11.
//

import UIKit

final class IssueTrackerTabBarCreator {
    
    private let childInfos: [TabBarChildInfo]
//    private var loginInfo: LoginInfo
    
    enum Title {
        static let issue = "이슈"
        static let label = "레이블"
        static let milestone = "마일스톤"
        static let myAccount = "내 계정"
    }
    
    enum SystemImageName {
        static let issue = "exclamationmark.circle"
        static let label = "tag"
        static let milestone = "signpost.right"
        static let myAccount = "person.circle"
    }
    
    init(childInfos: [TabBarChildInfo]) {
        self.childInfos = childInfos
//        self.loginInfo = loginInfo
    }
    
    convenience init() {
        let issue = TabBarChildInfo(title: Title.issue, imageName: SystemImageName.issue, type: IssueViewController.self)
        let label = TabBarChildInfo(title: Title.label, imageName: SystemImageName.label, type: LabelViewController.self)
        let milestone = TabBarChildInfo(title: Title.milestone, imageName: SystemImageName.milestone, type: MileStoneViewController.self)
        let myAccount = TabBarChildInfo(title: Title.myAccount, imageName: SystemImageName.myAccount, type: MyAccountViewController.self)
        self.init(childInfos: [issue, label, milestone, myAccount])
    }
    
    private func generateChild(with info: TabBarChildInfo) -> UIViewController {
        let tabBarItem = UITabBarItem(title: info.title, image: info.image, selectedImage: nil)
        let childViewController = info.type.create()
        childViewController.tabBarItem = tabBarItem
        
        let navigationController = UINavigationController()
        navigationController.navigationBar.prefersLargeTitles = true 
        navigationController.pushViewController(childViewController, animated: false)
        
        return navigationController
    }
}

extension IssueTrackerTabBarCreator {
    func create() -> IssueTrackerTabBarController {
        let issueTrackerTabBarController = IssueTrackerTabBarController()                
        let childs = childInfos.map{ generateChild(with: $0) }
        issueTrackerTabBarController.setViewControllers(childs, animated: true)
        return issueTrackerTabBarController
    }
}

