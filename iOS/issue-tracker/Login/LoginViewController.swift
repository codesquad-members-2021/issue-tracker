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
        print("test")
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
