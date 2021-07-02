//
//  Repository.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation
import Combine
import AuthenticationServices

protocol NetworkEngine {
    func requestUserAuth(to code: Data) -> AnyPublisher<[String: String], NetworkError>
    func requestGithubLoginCode(from viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError>
}

final class Repository: NetworkEngine {

    private let session: URLSession
    private let endpoint: EndPointGenerator
    private let callbackURLScheme = "issue-tracker"
    private var cancell: AnyCancellable?

    init(session: URLSession = .shared, endpoint: EndPointGenerator = EndPoint()) {
        self.session = session
        self.endpoint = endpoint
    }

    func requestUserAuth(to httpBody: Data) -> AnyPublisher<[String: String], NetworkError> {
        guard let url = endpoint.urlRequest(router: .auth, method: .post, body: httpBody) else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return self.session.dataTaskPublisher(for: url)
    }

    func requestGithubLoginCode(from viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError> {
        guard let url = endpoint.url(router: .github) else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return ASWebAuthenticationSession.publisher(url: url, sheme: callbackURLScheme, context: viewController).eraseToAnyPublisher()
    }
}


