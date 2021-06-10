//
//  AppDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/07.
//

import UIKit
import KeychainAccess

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    let keychain = Keychain()
    
    func applicationDidFinishLaunching(_ application: UIApplication) {
        keychain["github_OAuthURLString"] = "https://github.com/login/oauth/authorize"
        keychain["github_client_id"] = "1f8b844e0951dd8b43cb"
        keychain["github_redirect_uri"] = "issuetracker://login"
        keychain["github_callbackUrlScheme"] = "issuetracker"
        keychain["github_JWT_URL"] = "http://3.34.122.67/api/login/ios"        
        keychain["github_jwt"] = ""
        keychain["github_avatarUrl"] = ""
        keychain["github_loginId"] = ""
    }
}

