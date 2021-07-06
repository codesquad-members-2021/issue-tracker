//
//  TabBarViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class TabBarViewController: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()
        configureTabBar()
    }

    func configureTabBar() {
        let firstTab = createIssueListViewController()
        firstTab.tabBarItem = makeTabBarItem(title: "이슈", image: "exclamationmark.circle")

        let secondTab: UIViewController = .init()
        secondTab.tabBarItem = makeTabBarItem(title: "레이블", image: "tag")

        let thirdTab: UIViewController = .init()
        thirdTab.tabBarItem = makeTabBarItem(title: "마일스톤", image: "signpost.right")

        let fourthTab: UIViewController = .init()
        fourthTab.tabBarItem = makeTabBarItem(title: "내정보", image: "")

        self.viewControllers = [firstTab, secondTab, thirdTab, fourthTab]
    }

    private func createIssueListViewController() -> UINavigationController {
        let issueListViewController = UIStoryboard().create(name: "IssueList", type: IssueListViewController.self)
        let issueViewModel = IssuesListViewModel()
        issueViewModel.issues = issueListViewController.showIssueList(issues:)
        issueViewModel.errorHandler = issueListViewController.showError(from:)

        return UINavigationController(rootViewController: issueListViewController)
    }

    private func makeTabBarItem(title: String,
                                image: String,
                                selectedImage: String? = nil) -> UITabBarItem {

        return UITabBarItem(title: title,
                            image: UIImage(systemName: image),
                            selectedImage: UIImage(systemName: image))
    }
}
