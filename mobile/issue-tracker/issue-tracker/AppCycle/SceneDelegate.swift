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
        ViewSwitcher().updateViewController()
        window?.makeKeyAndVisible()
    }

    func changeRootViewController (_ vc: UIViewController) {
        guard let window = self.window else { return }
        window.rootViewController = vc
        UIView.transition(with: window,
                          duration: 0.4,
                          options: [.transitionCrossDissolve],
                          animations: nil, completion: nil)
    }
}
