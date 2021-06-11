//
//  ViewSwitcher.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/11.
//

import UIKit
import KeychainSwift

class ViewSwitcher {

    static func updateViewController() {
        let keyChain = KeychainSwift()
        var rootViewController: UIViewController?
        
        if keyChain.get("token") != nil {
            let storyBoard = UIStoryboard(name: "Main", bundle: nil)
            let mainTapController = storyBoard.instantiateViewController(withIdentifier: "Main")
            rootViewController = mainTapController
        } else {
            rootViewController = UIStoryboard().create(name: "Login", type: LoginViewController.self)
        }

        let appDelegate = UIApplication.shared.connectedScenes.first?.delegate as? SceneDelegate
        appDelegate?.changeRootViewController(rootViewController ?? .init())
    }
}
