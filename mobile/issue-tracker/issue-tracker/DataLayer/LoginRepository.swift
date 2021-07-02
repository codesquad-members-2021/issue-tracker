//
//  Repository.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation
import Combine
import AuthenticationServices

protocol LoginUseCase {
    func requestUserAuth(session: URLSession, urlRequest: URLRequest?) -> AnyPublisher<[String: String], NetworkError>
    func requestGithubLoginCode(url: URL?, from viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError>
}

struct LoginRepository: LoginUseCase {

    private let callbackURLScheme = "issue-tracker"

    func requestUserAuth(session: URLSession, urlRequest: URLRequest?) -> AnyPublisher<[String: String], NetworkError> {
        guard let url = urlRequest else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return session.dataTaskPublisher(for: url)
    }

    func requestGithubLoginCode(url: URL?, from viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError> {
        guard let url = url else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return ASWebAuthenticationSession.publisher(url: url, sheme: callbackURLScheme, context: viewController).eraseToAnyPublisher()
    }
}
