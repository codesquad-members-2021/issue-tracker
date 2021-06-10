//
//  Repository.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation
import Combine

class Repository {

    func requestUserAuth(to code: Encodable) -> AnyPublisher<[String: String], NetworkError> {
        guard let url = Endpoint.authURLRequest(to: code) else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }

        return URLSession.shared.dataTaskPublisher(for: url)
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

}
