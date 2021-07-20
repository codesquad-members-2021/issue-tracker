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

protocol Service {
    func fetchGithubCode(viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError>
    func fetchToken(to httpBody: Data) -> AnyPublisher<Void, NetworkError>
}

final class LoginService: Service {

    private let keychain: KeychainSwift
    private let repository: LoginUseCase
    private let endpoint: EndPointGenerator
    private let token = "token"

    init(keychain: KeychainSwift = KeychainSwift(),
         repository: LoginUseCase = LoginRepository(),
         endpoint: EndPointGenerator = EndPoint()) {
        self.keychain = keychain
        self.repository = repository
        self.endpoint = endpoint
    }

    func fetchGithubCode(viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError> {
        return repository.requestGithubLoginCode(url: endpoint.url(router: .github),
                                                 from: viewController)
    }

    func fetchToken(to httpBody: Data) -> AnyPublisher<Void, NetworkError> {

        return repository.requestUserAuth(session: .shared,
                                          urlRequest: endpoint.urlRequest(router: .auth,
                                                     method: .post,
                                                     body: httpBody))
            .catch { error in
                return Fail(error: error).eraseToAnyPublisher()
            }
            .map { [weak self] value in
                self?.keychain.set(value[self?.token ?? ""] ?? "",
                                   forKey: self?.token ?? "")
            }.eraseToAnyPublisher()
    }
}
