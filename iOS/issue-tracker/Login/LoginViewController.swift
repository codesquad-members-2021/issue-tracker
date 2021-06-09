//
//  LoginViewController.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/08.
//

import UIKit
import Octokit
import AuthenticationServices

class LoginViewController: UIViewController {

    var appleLogInButton : ASAuthorizationAppleIDButton = {
        let button = ASAuthorizationAppleIDButton()
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(handleLogInWithAppleID), for: .touchUpInside)
        return button
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureButton()
    }
    
    @objc func handleLogInWithAppleID(){
        let request = ASAuthorizationAppleIDProvider().createRequest()
        request.requestedScopes = [.fullName, .email]
        
        let controller = ASAuthorizationController(authorizationRequests: [request])
        controller.delegate = self
        controller.performRequests()
    }

    private func configureButton(){
        self.view.addSubview(appleLogInButton)
        
        NSLayoutConstraint.activate([
            appleLogInButton.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 16),
            appleLogInButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -16),
            appleLogInButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -60),
            appleLogInButton.heightAnchor.constraint(equalToConstant: 56)
        ])
    }
}

extension LoginViewController: ASAuthorizationControllerDelegate {
    func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
        switch authorization.credential {
        case let appleIDCredential as ASAuthorizationAppleIDCredential:
            let userIdentifier = appleIDCredential.user
            let email = appleIDCredential.email
            
            print(userIdentifier)
            print(String(describing: email))
        default: break
        }
    }
    
    func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
        // Handle Error
        print(error.localizedDescription)
    }
}
