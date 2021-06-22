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

    private let loginService: LoginService
    private var tokenState = PassthroughSubject<Void, Never>()
    private var cancellable = Set<AnyCancellable>()

    @Published private var message = ""

    init(loginService: LoginService = .init()) {
        self.loginService = loginService
    }

    func fetctGithubLogin(viewController: ASWebAuthenticationPresentationContextProviding) {
        loginService.fetchGithubCode(viewController: viewController).sink { [weak self] fail in
            if case .failure(let error) = fail {
                self?.message = error.description
            }
        } receiveValue: { [weak self] code in
            self?.authorizeUser(to: Auth(code: code).encode())
        }.store(in: &cancellable)
    }

    func authorizeUser(to httpBody: Data) {
        loginService.fetchToken(to: httpBody).sink { [weak self] fail in
            if case .failure(let error) = fail {
                self?.message = error.description
            }
        } receiveValue: { [weak self] _ in
            self?.tokenState.send()
        }.store(in: &cancellable)
    }

    func fetchErrorMessage() -> AnyPublisher<String, Never> {
        return $message
            .dropFirst()
            .eraseToAnyPublisher()
    }

    func AuthorizeCompltion() -> AnyPublisher<Void, Never> {
        return tokenState.eraseToAnyPublisher()
    }
}
