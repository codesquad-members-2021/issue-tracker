//
//  SceneDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/07.
//

import UIKit
import AuthenticationServices

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
        
        if let deviceID = loginInfo.deviceID {
            let appleIDProvider = ASAuthorizationAppleIDProvider()
            appleIDProvider.getCredentialState(forUserID: deviceID) { [weak self] (credentialState, error) in
                switch credentialState {
                case .authorized:
                    self?.straightToIssueTrackerScene(with: loginManager, loginInfo)
                default:
                    let _ = loginManager.delete()
                }
            }
        } else {
            straightToIssueTrackerScene(with: loginManager, loginInfo)
        }
    
    }
    
    private func straightToIssueTrackerScene(with loginManager: LoginKeyChainManager,_ loginInfo: LoginInfo) {
        DispatchQueue.main.async {
            let issueTrackerTabBarController = IssueTrackerTabBarController()
            issueTrackerTabBarController.configure(loginManager: loginManager, loginInfo: loginInfo)
            
            self.window?.rootViewController = issueTrackerTabBarController
        }
    }
    
}
