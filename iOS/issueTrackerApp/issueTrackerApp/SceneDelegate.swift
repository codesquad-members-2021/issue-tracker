//
//  SceneDelegate.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/07.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?
    var coordinator: MainFlowCoordinator?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        
        if let initialViewController = window?.rootViewController as? MainTabBarController {
            coordinator = MainFlowCoordinator(mainViewController: initialViewController)
        }
      
        guard let _ = (scene as? UIWindowScene) else { return }
    }
}

