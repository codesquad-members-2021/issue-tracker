//
//  TabBarViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/06.
//

import UIKit

class TabBarViewController: UITabBarController {

    private let tapItems: [TabBarItemType]

    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        tapItems = TabBarItemType.allCases
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        tapItems = TabBarItemType.allCases
        super.init(coder: coder)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureTabBar()
    }

    private func configureTabBar() {
        self.viewControllers =
            tapItems.map { item in makeTabBarController(type: item)}
    }

    private func makeTabBarController(type: TabBarItemType) -> UIViewController {
        let viewController = makeViewController(type: type)
        viewController.tabBarItem = makeTabBarItem(title: type.description, image: type.imageName)
        return viewController
    }

    private func makeViewController(type: TabBarItemType) -> UIViewController {
        switch type {
        case .issue:
            return createIssueListViewController(identifier: type.controllerIdentifier)
        case .label:
            return .init()
        case .milestone:
            return .init()
        case .info:
            return .init()
        }
    }

    private func createIssueListViewController(identifier: String) -> UINavigationController {
        let issueViewModel = IssueListViewModel()
        let issueDataSourece = IssueListCollectionDataSource()
        let issueListViewController: IssueListViewController = UIStoryboard(name: identifier, bundle: nil)
            .instantiateViewController(identifier: identifier) { coder in
            return IssueListViewController(coder: coder,
                                           issueViewModel: issueViewModel,
                                           issueDataSource: issueDataSourece)
        }

        issueViewModel.completeFetchIssues = issueListViewController.fetchIssueList(issueList:)
        issueViewModel.failErrorHandler = issueListViewController.showError(from:)

        return NavigationController(rootViewController: issueListViewController)
    }

    private func makeTabBarItem(title: String,
                                image: String,
                                selectedImage: String? = nil) -> UITabBarItem {

        return UITabBarItem(title: title,
                            image: UIImage(systemName: image),
                            selectedImage: UIImage(systemName: image))
    }
}
