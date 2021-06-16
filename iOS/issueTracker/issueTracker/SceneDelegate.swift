//
//  SceneDelegate.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/08.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?
    
    func scene(_ scene: UIScene,
               willConnectTo session: UISceneSession,
               options connectionOptions: UIScene.ConnectionOptions) {
        
        if KeyChainService.shared.getCurrentUserJWT() != "" {
            let storyboard = UIStoryboard(name: "IssueList", bundle: nil)

            let initialViewController = storyboard.instantiateViewController(withIdentifier: "IssueList")
            // 키체인에서 가져온 user를 컨트롤러로 넘겨줌
            // initialViewController?.getUser(user!)
            self.window?.rootViewController = initialViewController
            self.window?.makeKeyAndVisible()
        }
    }

    func sceneDidDisconnect(_ scene: UIScene) {
    }

    func sceneDidBecomeActive(_ scene: UIScene) {
    }

    func sceneWillResignActive(_ scene: UIScene) {
    }

    func sceneWillEnterForeground(_ scene: UIScene) {
    }

    func sceneDidEnterBackground(_ scene: UIScene) {
    }
}
