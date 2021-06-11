//
//  SceneDelegate.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/08.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }
        
        let tempVC = MainTabBarController()
        
        let appWindow = UIWindow(frame: windowScene.coordinateSpace.bounds)
        appWindow.windowScene = windowScene
        appWindow.rootViewController = tempVC
        appWindow.makeKeyAndVisible()
        window = appWindow
    }

}

