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
    func makeLoginViewCoordinator(navigation: UINavigationController, dependency: LoginViewCoordinatorDependencies) -> LoginViewCoordinator {
        return LoginViewCoordinator(navigation: navigation, dependency: dependency)
    }

    func makeTabBarCoordinator(navigation: UINavigationController, dependency: TabBarCoordinatorDependencies) -> TabBarCoordinator {
        return TabBarCoordinator(navigation: navigation, dependency: dependency)
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

extension AppDependency: TabBarCoordinatorDependencies {

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
