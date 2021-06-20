//
//  IntialViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/21.
//

import UIKit
import KeychainSwift

class IntialViewController: UIViewController {
    
    private var viewController: UIViewController?
    private var tokenState: Bool {
        return KeychainSwift().get("token") == nil
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        viewController = moveViewController()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        self.present(viewController ?? .init(),
                     animated: true)
    }
    
    func moveViewController() -> UIViewController? {
        if tokenState {
            viewController = UIStoryboard().create(name: "Login",
                                                   type: LoginViewController.self)
        } else {
            viewController = UIStoryboard().create(name: "Main",
                                                   type: UITabBarController.self)
        }
        viewController?.modalPresentationStyle = .fullScreen
        return viewController
    }
}
