//
//  SceneDelegate.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/08.
//

import UIKit

final class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?
    lazy var diContainer = IssueTrackerDIContainer()
    
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }
        let navigationController = UINavigationController()
        let flowCoordinator = diContainer.makeSceneFlowCoordinator(navigationController)
        
        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = navigationController
        flowCoordinator.start()
        window?.makeKeyAndVisible()
    }
}

