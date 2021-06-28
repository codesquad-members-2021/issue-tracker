//
//  LoginFlowCoordinator.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import UIKit
import AuthenticationServices

class LoginFlowCoordinator: NSObject, ASWebAuthenticationPresentationContextProviding {
    weak var parent: Coordinator?
    weak var loginViewController: UIViewController?
    
    func mainViewControllerRequiresAuthentication(_ viewController: MainTabBarController, isAppLaunch: Bool) {
        let newViewController = viewController.storyboard?.instantiateViewController(withIdentifier: ViewControllerIDs.loginViewController)
        guard let loginViewController = newViewController as? LoginViewController else {
            return
        }
        self.loginViewController = loginViewController
        configure(viewController: loginViewController)
        viewController.present(loginViewController, animated: !isAppLaunch, completion: nil)
    }
    
    func loginViewController(_ viewController: LoginViewController, didStartAuthorizationWithState state: String) {
        let url = GitHubEndpoint.authorizationUrl()

        let session = ASWebAuthenticationSession(url: url, callbackURLScheme: GitHubEndpoint.authorizationCallbackURLScheme)
        { callbackURL, error in
            guard error == nil, let callbackURL = callbackURL else { return }

            if let authorizationCode = callbackURL.authorizationCode {
                viewController.performAuthorization(with: authorizationCode)
            }
        }
        session.presentationContextProvider = self
        session.start()
    }
    
    func loginViewControllerDidFinishAuthorization() {
        loginViewController?.dismiss(animated: true, completion: nil)
    }
    
    func loginViewControllerDidSignOut() {
        UIApplication.shared.open(GitHubEndpoint.signOutURL, options: [:], completionHandler: nil)
    }
    
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return ASPresentationAnchor()
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
