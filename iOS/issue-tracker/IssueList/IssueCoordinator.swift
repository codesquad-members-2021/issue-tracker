//
//  IssueCoordinator.swift
//  issue-tracker
//
//  Created by 이다훈 on 2021/06/08.
//

import UIKit

class IssueCoordinator: NSObject, Coordinator {
    
    var navigationController = UINavigationController()
    
    override init() {
        let issueListVC = UIStoryboard(name: StoryBoardName.IssueList.description, bundle: nil).instantiateViewController(withIdentifier: IssueListViewController.reuseIdentifier) as! IssueListViewController
        
        self.navigationController = UINavigationController(rootViewController: issueListVC)
        navigationController.tabBarItem = UITabBarItem(title: "이슈", image: UIImage.init(systemName: "exclamationmark.circle"), tag: 0)
        super.init()
        issueListVC.coordinator = self
    }
    
    func pushEditView() {
        let issueEditVC = UIStoryboard(name: StoryBoardName.IssueEdit.description, bundle: nil).instantiateViewController(withIdentifier: IssueEditViewController.reuseIdentifier) as! IssueEditViewController
        
        navigationController.pushViewController(issueEditVC, animated: true)
    }
}
