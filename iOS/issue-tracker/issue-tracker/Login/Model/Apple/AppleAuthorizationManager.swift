//
//  AppleLoginManager.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import AuthenticationServices

final class AppleAuthorizationManager: NSObject, SocialLoginManagable {
    
    private weak var viewController: UIViewController?
    private weak var delegate: SocialLoginManagerDelegate?
    private var keyChainSaver: LoginKeyChainManager
    
    init(viewController: UIViewController, delegate: SocialLoginManagerDelegate, keyChainSaver: LoginKeyChainManager) {
        self.viewController = viewController
        self.delegate = delegate
        self.keyChainSaver = keyChainSaver
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
            delegate?.didSocialLoginFail(with: LoginError.appleIDAccess)
            return
        }
        
        let userID = appleIDCredential.user
        let loginInfo = LoginInfo(userID: userID, jwt: tokenInString, avatarURL: nil, name: name)
        
        if !keyChainSaver.save(loginInfo) {
            let saveError = LoginError.keyChainSave
            delegate?.didSocialLoginFail(with: saveError)
        } else {
            delegate?.didSocialLoginSuccess(with: loginInfo)
        }
    }
    
    func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
        let appleLoginError = LoginError.appleIDAccess
        delegate?.didSocialLoginFail(with: appleLoginError)
    }
}

extension AppleAuthorizationManager: ASAuthorizationControllerPresentationContextProviding {
    func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor {
        return viewController?.view.window ?? UIWindow()
    }
}
