//
//  Coordinator.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import UIKit

// MARK: Protocols
protocol Coordinator: AnyObject {
    func configure(viewController: UIViewController)
}

protocol Coordinated: class {
    var coordinator: Coordinator? { get set }
}

protocol MainCoordinated: AnyObject {
    var mainCoordinator: MainFlowCoordinator? { get set }
}

protocol LoginCoordinated: AnyObject {
    var loginCoordinator: LoginFlowCoordinator? { get set }
}

protocol LoginNetworked: class {
    func setLoginNetworkManager(_ loginNetworkManager: LoginNetworkManager)
}

protocol AddIssueViewModelType: AnyObject {
    func setAddIssueViewModel(_ addIssueViewModel: AddIssueViewModel)
}

protocol IssueViewModelType: AnyObject {
    func setIssueViewModel(_ issueViewModel: IssueViewModel)
}

protocol IssueNetworked: class {
    func setIssueNetworkController(_ issueNetworkController: IssueNetworkController)
}

class MainFlowCoordinator: NSObject {
    private let mainTabBarController: MainTabBarController
    private let keychainManager = KeychainManager()
    private let loginFlowCoordinator = LoginFlowCoordinator()
    private let addIssueViewModel = AddIssueViewModel()
    private let issueViewModel = IssueViewModel()
    
    init(mainViewController: MainTabBarController) {
        self.mainTabBarController = mainViewController
        super.init()
        loginFlowCoordinator.parent = self
        configure(viewController: mainViewController)
    }
    
    func logOut() {
        loginFlowCoordinator.mainViewControllerRequiresAuthentication(mainTabBarController, isAppLaunch: false)
    }
}

extension MainFlowCoordinator: Coordinator {
    func configure(viewController: UIViewController) {
        (viewController as? MainCoordinated)?.mainCoordinator = self
        (viewController as? LoginNetworked)?.setLoginNetworkManager(LoginNetworkManager(keychainManager: keychainManager))
        (viewController as? LoginCoordinated)?.loginCoordinator = loginFlowCoordinator
        (viewController as? AddIssueViewModelType)?.setAddIssueViewModel(addIssueViewModel)
        (viewController as? IssueNetworked)?.setIssueNetworkController(IssueNetworkController())
        (viewController as? IssueViewModelType)?.setIssueViewModel(issueViewModel)
        
        if let tabBarController = viewController as? UITabBarController {
            tabBarController.viewControllers?.forEach(configure(viewController:))
        }
        if let navigationController = viewController as? UINavigationController,
            let rootViewController = navigationController.viewControllers.first {
            configure(viewController: rootViewController)
        }
    }
}
