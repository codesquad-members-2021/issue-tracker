//
//  AppleLoginManager.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import AuthenticationServices

final class AppleAuthorizationManager: NSObject {
    
    private weak var viewController: UIViewController?
    private weak var delegate: AppleLoginManagerDelegate?
    
    init(viewController: UIViewController, delegate: AppleLoginManagerDelegate) {
        self.viewController = viewController
        self.delegate = delegate
    }
    
    func login() {
        let request = ASAuthorizationAppleIDProvider().createRequest()
        request.requestedScopes = [.email, .fullName]
        
        let authorizationController = ASAuthorizationController(authorizationRequests: [request])
        authorizationController.delegate = self
        authorizationController.presentationContextProvider = self
        authorizationController.performRequests()
    }
    
}

extension AppleAuthorizationManager: ASAuthorizationControllerDelegate {
    func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
        guard let appleIDCredential = authorization.credential as? ASAuthorizationAppleIDCredential,
              let token = appleIDCredential.identityToken,
              let tokenInString = String(data: token, encoding: .utf8),
              let name = appleIDCredential.fullName?.givenName ?? appleIDCredential.fullName?.familyName else {
            delegate?.didAppleLoginFail(with: LoginError.appleIDAccess)
            return
        }
        
        let loginInfo = LoginInfo(jwt: tokenInString, avatarURL: nil, name: name)
        delegate?.didAppleLoginSuccess(with: loginInfo)
    }
    
    func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
        delegate?.didAppleLoginFail(with: error)
    }
}

extension AppleAuthorizationManager: ASAuthorizationControllerPresentationContextProviding {
    func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor {
        return viewController?.view.window ?? UIWindow()
    }
}
