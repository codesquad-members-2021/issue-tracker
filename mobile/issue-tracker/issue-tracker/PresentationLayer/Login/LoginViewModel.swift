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
    private var successSubject = PassthroughSubject<Void, Never>()
    private var cancellable = Set<AnyCancellable>()

    @Published private var message = ""

    init(loginService: LoginService = .init()) {
        self.loginService = loginService
    }

    func fetctGithubLogin(from content: ASWebAuthenticationPresentationContextProviding) {
        loginService.fetchGithubCode(from: content) { code, error in
            guard error == nil, let code = code else {
                self.message = error?.description ?? ""
                return
            }
            self.authorizeUser(to: Auth(code: code))
        }
    }

    func authorizeUser(to code: Encodable) {
        loginService.fetchToken(to: code).sink { fail in
            if case .failure(let error) = fail {
                self.message = error.description
            }
        } receiveValue: { [weak self] _ in
            self?.successSubject.send()
        }.store(in: &cancellable)
    }

    func fetchErrorMessage() -> AnyPublisher<String, Never> {
        return $message
            .dropFirst()
            .eraseToAnyPublisher()
    }

    func AuthorizeCompltion() -> AnyPublisher<Void, Never> {
        return successSubject.eraseToAnyPublisher()
    }
}
