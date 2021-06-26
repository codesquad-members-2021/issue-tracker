//
//  LoginViewModel.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import Foundation
import Combine
import AuthenticationServices

final class LoginViewModel {

    private let loginService: Service
    private var cancellable = Set<AnyCancellable>()

    var errorHandler: ((NetworkError) -> Void)?
    var onDismiss: (() -> Void)?

    init(loginService: Service = LoginService()) {
        self.loginService = loginService
    }

    func fetctGithubLogin(viewController: ASWebAuthenticationPresentationContextProviding) {
        loginService.fetchGithubCode(viewController: viewController).sink { [weak self] fail in
            if case .failure(let error) = fail {
                self?.errorHandler?(error)
            }
        } receiveValue: { [weak self] code in
            self?.authorizeUser(to: Auth(code: code).encode())
        }.store(in: &cancellable)
    }

    private func authorizeUser(to httpBody: Data) {
        loginService.fetchToken(to: httpBody).sink { [weak self] fail in
            if case .failure(let error) = fail {
                self?.errorHandler?(error)
            }
        } receiveValue: { [weak self] _ in
            self?.onDismiss?()
        }.store(in: &cancellable)
    }

}
