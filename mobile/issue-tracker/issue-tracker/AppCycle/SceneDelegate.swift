//
//  SceneDelegate.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene,
               willConnectTo session: UISceneSession,
               options connectionOptions: UIScene.ConnectionOptions) {
        guard let screen = (scene as? UIWindowScene) else { return }

        window = UIWindow(frame: UIScreen.main.bounds)
        window?.windowScene = screen
        window?.rootViewController = IntialViewController()
        window?.makeKeyAndVisible()
    }
}
