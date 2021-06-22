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
            .mapError { _ in
                NetworkError.invalidRequest
            }
            .flatMap { (data, response) -> AnyPublisher<[String: String], NetworkError> in
                guard let httpresponse = response as? HTTPURLResponse else {
                    return Fail(error: NetworkError.invalidResponse).eraseToAnyPublisher()
                }

                guard 200..<300 ~= httpresponse.statusCode else {
                    return Fail(error: NetworkError.invalidStatusCode(httpresponse.statusCode)).eraseToAnyPublisher()
                }

                return Just(data)
                    .decode(type: [String: String].self, decoder: JSONDecoder())
                    .mapError { _ in
                        NetworkError.failParsing
                    }.eraseToAnyPublisher()
            }.eraseToAnyPublisher()
    }

    func fetchGithubLoginCode(from viewController: ASWebAuthenticationPresentationContextProviding) -> AnyPublisher<String, NetworkError> {
        guard let url = endpoint.url(router: .github) else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return ASWebAuthenticationSession.publisher(url: url, sheme: callbackURLScheme, context: viewController).eraseToAnyPublisher()
    }
}
