//
//  LoginViewController.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit
import AuthenticationServices

final class LoginViewController: UIViewController {

    var githubLoginHandler: ((ASWebAuthenticationPresentationContextProviding) -> Void)?

    override func viewDidLoad() {}

    @IBAction func loginButtonTouched(_ sender: Any) {
        githubLoginHandler?(self)
    }

    func showError(from error: NetworkError) {
        DispatchQueue.main.async {
            let alertController = UIAlertController(title: error.description)
            self.present(alertController, animated: true)
        }
    }

    func authorizeCompltion() {
        DispatchQueue.main.async {
            self.dismiss(animated: true, completion: nil)
        }
    }
}

extension LoginViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
}
