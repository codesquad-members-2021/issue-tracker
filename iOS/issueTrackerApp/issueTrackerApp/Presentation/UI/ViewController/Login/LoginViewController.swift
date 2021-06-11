//
//  LoginViewController.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/08.
//

import UIKit
import AuthenticationServices

class LoginViewController: UIViewController, LoginCoordinated, Networked {

    @IBOutlet weak var gitHubLoginButton: UIButton!
    @IBOutlet weak var appleLoginButton: UIStackView!
    
    private let state = UUID().description
    
    weak var loginCoordinator: LoginFlowCoordinator?
    var networkController: NetworkController?
    
    var isAuthenticating: Bool = false {
        didSet {
            gitHubLoginButton.isEnabled = !isAuthenticating
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configAppleLoginButton()
    }
}

//MARK:- APPLE ID LOGIN

extension LoginViewController: ASAuthorizationControllerPresentationContextProviding, ASAuthorizationControllerDelegate {
    private func configAppleLoginButton() {
        let authorizationButton = ASAuthorizationAppleIDButton(type: .signIn, style: .black)
        authorizationButton.addTarget(self, action: #selector(appleLoginButtonTapped), for: .touchUpInside)
        self.appleLoginButton.addArrangedSubview(authorizationButton)
    }

    @objc func appleLoginButtonTapped() {
        let appleIDProvider = ASAuthorizationAppleIDProvider()
        let request = appleIDProvider.createRequest()
        request.requestedScopes = [.fullName, .email]
        
        let authorizationController = ASAuthorizationController(authorizationRequests: [request])
        authorizationController.delegate = self
        authorizationController.presentationContextProvider = self
        authorizationController.performRequests()
    }
    
    func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor {
        return self.view.window!
    }
    
    func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
        switch authorization.credential {
        case let appleIDCredential as ASAuthorizationAppleIDCredential:
            let accessToken = appleIDCredential.user
            let fullName = appleIDCredential.fullName
            let email = appleIDCredential.email
        default:
            break
        }
    }
    
    func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
        //to do
    }
}

//MARK:- GitHub LOGIN
extension LoginViewController {
    func performAuthorization(with authorizationCode: String) {
        isAuthenticating = true
        networkController?.authenticateWith(authorizationCode: authorizationCode, client: GitHubEndpoint.FieldNames.client) { [weak self] in
            self?.loginCoordinator?.loginViewControllerDidFinishAuthorization()
        }
    }
    
    @IBAction func gitHubLoginButtonTapped(_ sender: Any) {
        loginCoordinator?.loginViewController(self, didStartAuthorizationWithState: state)
    }
}
