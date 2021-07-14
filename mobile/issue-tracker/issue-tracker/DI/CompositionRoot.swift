//
//  CompositionRoot.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

struct AppDependency {
    let endpoint = EndPoint()
}

extension AppDependency: AppCoordinatorDependencies {
    func makeloginViewController() -> LoginViewController {
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

    func makeTabBarViewController() -> TabBarViewController {
        let issueCoordinator = IssueListCoordinator(navigation: NavigationController(),
                                                    dependency: self)

        let labelCoordinator = LabelCoordinator(navigation: NavigationController())
        let milestoneCoordinator = MilestoneCoordinator(navigation: NavigationController())
        let infoCoordinator = InfoCoordinator(navigation: NavigationController())
        let tabbarViewController = TabBarViewController.instantiate { coder in
            return .init(coder: coder,
                         issueCoordinator: issueCoordinator,
                         labelCoordinator: labelCoordinator,
                         milestoneCoordinator: milestoneCoordinator,
                         infoCoordinator: infoCoordinator)
        }
        return tabbarViewController
    }
}

extension AppDependency: IssueListCoordinatorDependencies {
    func makeIssueListViewController() -> IssueListViewController {
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
}
