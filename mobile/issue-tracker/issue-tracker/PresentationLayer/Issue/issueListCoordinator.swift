//
//  issueListCoordinator.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/12.
//

import UIKit

 final class IssueListCoordinator: Coordinator {

    var navigation: UINavigationController

    init(navigation: UINavigationController = NavigationController()) {
        self.navigation = navigation
    }

    func start() {
        let issueViewModel = IssueListViewModel()
        let issueDataSourece = IssueListCollectionDataSource()
        let issueListViewController: IssueListViewController = UIStoryboard(name: "IssueListViewController", bundle: nil)
            .instantiateViewController(identifier: "IssueListViewController") { coder in
            return IssueListViewController(coder: coder,
                                           issueViewModel: issueViewModel,
                                           issueDataSource: issueDataSourece)
        }

        issueViewModel.completeFetchIssues = issueListViewController.fetchIssueList(issueList:)
        issueViewModel.failErrorHandler = issueListViewController.showError(from:)

        navigation.tabBarItem = UITabBarItem(type: .issue)
        navigation.pushViewController(issueListViewController, animated: true)
    }
 }
