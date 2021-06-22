//
//  LoginService.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation
import Combine
import KeychainSwift
import AuthenticationServices

final class LoginService {

    private let keychain: KeychainSwift
    private let repository: Repository

    private let token = "token"

    init(keychain: KeychainSwift = KeychainSwift(), repository: Repository = .init()) {
        self.keychain = keychain
        self.repository = repository
    }

    func fetchGithubCode(viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError> {
        return repository.fetchGithubLoginCode(from: viewController)
    }

    func fetchToken(to code: Encodable) -> AnyPublisher<Void, NetworkError> {
        return repository.requestUserAuth(to: code)
            .catch { error in
                return Fail(error: error).eraseToAnyPublisher()
            }
            .map { [weak self] value in
                self?.keychain.set(value[self?.token ?? ""] ?? "",
                                  forKey: self?.token ?? "")
            }.eraseToAnyPublisher()
    }
}
