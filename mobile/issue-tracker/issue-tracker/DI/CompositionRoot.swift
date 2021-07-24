//
//  CompositionRoot.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

struct AppDependency {
    let endpoint = EndPoint()

    func makeLoginCoordinator(navigation: UINavigationController) -> LoginViewCoordinator {
        return .init(navigation: navigation, dependency: self)
    }

    func makeTabBarCoordinator(navigation: UINavigationController) -> TabBarCoordinator {
        return .init(navigation: navigation, dependency: .init(issueListCoordinatorFactory: makeIssueListCoordinator, labelCoordinatorFactory: makeLabelCoordinator, milestoneCoordinatorFactory: makeMilestoneCoordinator, infoCoordinatorFactory: makeInfoCoordinator))
    }

    func makeIssueListCoordinator() -> IssueListCoordinator {
        return IssueListCoordinator(navigation: NavigationController(),
                                    dependency: self)
    }
    func makeLabelCoordinator() -> LabelCoordinator {
        return LabelCoordinator()
    }

    func makeMilestoneCoordinator() -> MilestoneCoordinator {
        return MilestoneCoordinator()
    }

    func makeInfoCoordinator() -> InfoCoordinator {
        return InfoCoordinator()
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

extension AppDependency: LoginViewCoordinatorDependencies {
    func makeLoginViewController() -> LoginViewController {
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
}
