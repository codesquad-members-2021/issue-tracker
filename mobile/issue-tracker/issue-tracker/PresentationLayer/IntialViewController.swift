//
//  IntialViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/21.
//

import UIKit
import KeychainSwift

class IntialViewController: UIViewController {

    private var viewHandler: ((UIViewController) -> Void)?
    private var selectViewController: UIViewController {
        KeychainSwift().get("token") == nil ?
            UIStoryboard().create(name: "Login", type: LoginViewController.self) :
            UIStoryboard().create(name: "Main", type: UITabBarController.self)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground

        bind { [weak self] viewController in
            viewController.modalPresentationStyle = .fullScreen
            self?.present(viewController, animated: true)
        }
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        viewHandler?(selectViewController)
    }

    private func bind(viewController: @escaping ((UIViewController) -> Void)) {
        self.viewHandler = viewController
    }
}
