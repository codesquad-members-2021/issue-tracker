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
    private let loginInfo = LoginInfo.shared

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    
        var loginManager: LoginKeyChainManager?
        var loginInfo: LoginInfoDTO?
        
        for loginService in LoginService.allCases {
            loginManager = LoginKeyChainManager(loginService: loginService)
            loginInfo = loginManager?.read()
            
            if loginInfo != nil {
                self.loginInfo.service = loginService
                break
            }
        }
        
        guard let loginManager = loginManager, let loginInfo = loginInfo else { return }

        if let userID = loginInfo.userID {
            let appleIDProvider = ASAuthorizationAppleIDProvider()
            appleIDProvider.getCredentialState(forUserID: userID) { [weak self] (credentialState, error) in
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
    
    private func straightToIssueTrackerScene(with loginManager: LoginKeyChainManager,_ loginInfoDTO: LoginInfoDTO) {
        loginInfo.store(loginInfoDTO: loginInfoDTO)
        
        DispatchQueue.main.async {
            let issueTrackerTabBarControllerCreator = IssueTrackerTabBarCreator()
            let issueTrackerTabBarController = issueTrackerTabBarControllerCreator.create()
            self.window?.rootViewController = issueTrackerTabBarController
        }
    }
}
