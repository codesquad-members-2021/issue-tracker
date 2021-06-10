//
//  SceneDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/07.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    
        var loginManager: LoginKeyChainManager?
        var loginInfo: LoginInfo?
        
        for loginService in LoginService.allCases {
            loginManager = LoginKeyChainManager(loginService: loginService)
            loginInfo = loginManager?.read()
            
            if loginInfo != nil {
                break
            }
        }
        
        guard let loginManager = loginManager, let loginInfo = loginInfo else { return }
        
        let issueTrackerTabBarController = IssueTrackerTabBarController()
        issueTrackerTabBarController.configure(loginManager: loginManager, loginInfo: loginInfo)
        
        window?.rootViewController = issueTrackerTabBarController
        
        print(loginInfo.name, " 님  환영합니다! 님 정보는? \(loginInfo)" )
    }    
}
