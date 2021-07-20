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

    @IBOutlet weak var standardAccountStackView: UIStackView!
    
    var appleLogInButton : ASAuthorizationAppleIDButton = {
        let button = ASAuthorizationAppleIDButton()
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(handleLogInWithAppleID), for: .touchUpInside)
        return button
    }()
    
    var githubLogInButton : UIButton = {
        let button = UIButton()
        button.translatesAutoresizingMaskIntoConstraints = false
        button.backgroundColor = .black
        button.titleLabel?.font = .boldSystemFont(ofSize: 20)
        button.setImage(UIImage.init(named: "githubIcon"), for: .normal)
        button.setTitle(" GitHub 계정으로 로그인", for: .normal)
        button.layer.cornerRadius = 5
        button.setTitleColor(.white, for: .normal)
        button.addTarget(self, action: #selector(handleLogInWithGithubID), for: .touchUpInside)
        return button
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureButton()
    }
    
    @objc
    func handleLogInWithAppleID() {
        let request = ASAuthorizationAppleIDProvider().createRequest()
        request.requestedScopes = [.fullName, .email]
        
        let controller = ASAuthorizationController(authorizationRequests: [request])
        controller.delegate = self
        controller.performRequests()
    }
    
    @objc
    func handleLogInWithGithubID() {
        
    }

    private func configureButton() {
        self.view.addSubview(appleLogInButton)
        self.view.addSubview(githubLogInButton)
        
        NSLayoutConstraint.activate([
            appleLogInButton.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 16),
            appleLogInButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -16),
            appleLogInButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -60),
            appleLogInButton.heightAnchor.constraint(equalToConstant: 56)
        ])
        NSLayoutConstraint.activate([
            githubLogInButton.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 16),
            githubLogInButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -16),
            githubLogInButton.bottomAnchor.constraint(equalTo: appleLogInButton.safeAreaLayoutGuide.topAnchor, constant: -14),
            githubLogInButton.topAnchor.constraint(greaterThanOrEqualTo: standardAccountStackView.safeAreaLayoutGuide.bottomAnchor, constant: 20),
            githubLogInButton.heightAnchor.constraint(equalToConstant: 56)
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
