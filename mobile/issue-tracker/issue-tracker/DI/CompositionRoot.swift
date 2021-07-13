//
//  CompositionRoot.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

struct AppDependency {
    let mainCoordinator: MainCoordinator
}

extension AppDependency {
    static func resolve() -> AppDependency {

        let endpoint = EndPoint()

        let loginViewControllerFactory: () -> LoginViewController = {
            let loginRepository = LoginRepository()
            let loginService = LoginService(keychain: .init(),
                                            repository: loginRepository,
                                            endpoint: endpoint)
            let loginViewModel = LoginViewModel(loginService: loginService)
            let loginViewController = LoginViewController.instantiate { coder in
                return .init(coder: coder)
            }
            loginViewModel.errorHandler = loginViewController.showError(from:)
            loginViewModel.onDismiss = loginViewController.authorizeCompltion
            loginViewController.githubLoginHandler = loginViewModel.fetctGithubLogin(viewController:)
            return loginViewController
        }

        let issueListViewControllerFactory: () -> IssueListViewController = {
            let issueRepository = IssueRepository()
            let issueDataSourece = IssueListCollectionDataSource()
            let issueViewModel: IssueListViewModel = .init(issuesUseCase: issueRepository,
                                                           endpoint: endpoint)

            let issueListViewController = IssueListViewController.instantiate { coder in
                return .init(coder: coder,
                             issueViewModel: issueViewModel,
                             issueDataSource: issueDataSourece)
            }
            issueViewModel.failErrorHandler = issueListViewController.showError(from:)
            issueViewModel.completeFetchIssues = issueListViewController.fetchIssueList(issueList:)
            return issueListViewController
        }

        return .init(mainCoordinator: MainCoordinator())
    }
}
