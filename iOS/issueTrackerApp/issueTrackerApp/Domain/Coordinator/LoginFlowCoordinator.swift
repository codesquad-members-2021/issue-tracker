//
//  LoginFlowCoordinator.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import UIKit
import AuthenticationServices

class LoginFlowCoordinator {
    weak var parent: Coordinator?
    weak var loginViewController: UIViewController?
    private var authenticationSession: ASWebAuthenticationSession?
    
    func mainViewControllerRequiresAuthentication(_ viewController: MainTabBarController, isAppLaunch: Bool) {
        let newViewController = viewController.storyboard?.instantiateViewController(withIdentifier: ViewControllerIDs.loginViewController)
        guard let loginViewController = newViewController as? LoginViewController else {
            return
        }
        self.loginViewController = loginViewController
        configure(viewController: loginViewController)
        loginViewController.modalTransitionStyle = isAppLaunch ? .crossDissolve : .coverVertical
        viewController.present(loginViewController, animated: !isAppLaunch, completion: nil)
    }
    
    func loginViewController(_ viewController: LoginViewController, didStartAuthorizationWithState state: String) {
        let url = GitHubEndpoint.authorizationUrl(with: state)
        print("URL", url)
        authenticationSession = ASWebAuthenticationSession(url: url, callbackURLScheme: nil, completionHandler: { [weak self] (callbackURL, error) in
            self?.authenticationSession = nil
            if let authorizationCode = callbackURL?.authorizationCode {
                viewController.performAuthorization(with: authorizationCode)
            }
        })
        authenticationSession?.start()
    }
    
    func loginViewControllerDidFinishAuthorization() {
        loginViewController?.dismiss(animated: true, completion: nil)
    }
}

extension LoginFlowCoordinator: Coordinator {
    func configure(viewController: UIViewController) {
        parent?.configure(viewController: viewController)
    }
}

extension LoginFlowCoordinator {
    struct ViewControllerIDs {
        static let loginViewController = "LoginViewController"
    }
}
