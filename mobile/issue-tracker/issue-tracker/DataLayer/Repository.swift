//
//  Repository.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation
import Combine
import AuthenticationServices

protocol Requesting {
    func requestUserAuth(to code: Encodable) -> AnyPublisher<[String: String], NetworkError>
}

final class Repository: Requesting {

    private let session: URLSession

    private let callbackURLScheme = "issue-tracker"
    private var cancell: AnyCancellable?

    init(session: URLSession = .shared) {
        self.session = session
    }

    func requestUserAuth(to code: Encodable) -> AnyPublisher<[String: String], NetworkError> {

        guard let url = EndPoint().authURLRequest(to: code, method: .post) else {
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
        guard let url = GithubConfiguration().url() else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return ASWebAuthenticationSession.publisher(url: url, sheme: callbackURLScheme, context: viewController).eraseToAnyPublisher()
    }
}
