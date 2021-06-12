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

    func fetchGithubCode(from content: ASWebAuthenticationPresentationContextProviding, completionHandler: @escaping (String?, Error?) -> Void) {
        repository.fetchGithubLoginCode(from: content) { result in
            switch result {
            case .failure(let error):
                completionHandler(nil, error)
            case .success(let code):
                completionHandler(code, nil)
            }
        }
    }

    func fetchToken(to code: Encodable) -> AnyPublisher<Void, NetworkError> {
        return repository.requestUserAuth(to: code)
            .catch { error in
                return Fail(error: error).eraseToAnyPublisher()
            }
            .map { [weak self] value in
                guard let self = self else { return }
                self.keychain.set(value[self.token] ?? "",
                                  forKey: self.token)
                return
            }.eraseToAnyPublisher()
    }
}
