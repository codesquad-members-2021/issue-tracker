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

protocol Networked: class {
    var networkController: NetworkController? { get set }
}

protocol AddIssueViewModelType: AnyObject {
//    var addIssueViewModel: AddIssueViewModel? { get set }
    func setAddIssueViewModel(_ addIssueViewModel: AddIssueViewModel)
}

protocol IssueViewModelType: AnyObject {
    var issueViewModel: IssueViewModel? { get set }
}

protocol IssueNetworked: class {
    func setIssueNetworkController(_ issueNetworkController: IssueNetworkController)
}

class MainFlowCoordinator: NSObject {
    private let mainTabBarController: MainTabBarController
    private let keyChainController = KeychainController()
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
        (viewController as? Networked)?.networkController = NetworkController(keychainController: keyChainController)
        (viewController as? LoginCoordinated)?.loginCoordinator = loginFlowCoordinator
        (viewController as? AddIssueViewModelType)?.setAddIssueViewModel(addIssueViewModel)
        (viewController as? IssueNetworked)?.setIssueNetworkController(IssueNetworkController())
        (viewController as? IssueViewModelType)?.issueViewModel = issueViewModel
        
        if let tabBarController = viewController as? UITabBarController {
            tabBarController.viewControllers?.forEach(configure(viewController:))
        }
        if let navigationController = viewController as? UINavigationController,
            let rootViewController = navigationController.viewControllers.first {
            configure(viewController: rootViewController)
        }
    }
}
