//
//  SceneFlowCoordinator.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/15.
//

import UIKit

protocol SceneFlowCoordinatorDependencies {
    func makeIssueListTabBarController() -> UITabBarController
}


class SceneFlowCoordinator {
    private weak var rootVC: UINavigationController?
    private var dependencies: SceneFlowCoordinatorDependencies
    
    init(_ rootViewController: UINavigationController, _ dependencies: SceneFlowCoordinatorDependencies) {
        self.rootVC = rootViewController
        self.dependencies = dependencies
    }
    
    func start() {
        let vc = dependencies.makeIssueListTabBarController()
        rootVC?.setNavigationBarHidden(true, animated: false)
        rootVC?.pushViewController(vc, animated: true)
    }
}
