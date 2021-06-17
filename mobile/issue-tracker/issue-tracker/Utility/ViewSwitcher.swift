//
//  ViewSwitcher.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/11.
//

import UIKit
import KeychainSwift

class ViewSwitcher {

    private let keyChain: KeychainSwift

    init(keyChain: KeychainSwift = KeychainSwift()) {
        self.keyChain = keyChain
    }

    func updateViewController() {
        var rootViewController: UIViewController?
//        keyChain.delete("token")
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
