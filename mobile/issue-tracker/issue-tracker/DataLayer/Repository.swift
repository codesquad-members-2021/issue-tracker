//
//  Repository.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation
import Combine
import AuthenticationServices

protocol Repositorable {
    func requestUserAuth(to code: Encodable) -> AnyPublisher<[String: String], NetworkError>
}

final class Repository: Repositorable {

    private let session: URLSession
    private var webAuthSession: ASWebAuthenticationSession?

    private let callbackURLScheme = "issue-tracker"

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

    func fetchGithubLoginCode(from viewController: ASWebAuthenticationPresentationContextProviding, completion: @escaping (Result<String, NetworkError>) -> Void) {
        guard let url = GithubConfiguration().url() else {
            completion(.failure(NetworkError.invalidURL))
            return
        }

        webAuthSession = .init(url: url, callbackURLScheme: callbackURLScheme) { (callback: URL?, error: Error?) in
            guard error == nil, let successURL = callback else {
                completion(.failure(NetworkError.failedAuthentication))
                return
            }

            let queryItems = URLComponents(string: successURL.absoluteString)?.queryItems
            let code = queryItems?.filter { $0.name == "code" }.first?.value ?? ""
            completion(.success(code))
        }
        configureWebAuthSession(from: viewController)
    }

    private func configureWebAuthSession(from content: ASWebAuthenticationPresentationContextProviding) {
        webAuthSession?.presentationContextProvider = content
        webAuthSession?.start()
    }
}
