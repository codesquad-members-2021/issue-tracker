//
//  LoginService.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation
import Combine

class LoginService {

    private let repository = Repository()

    func fetchToken(to code: Encodable) -> AnyPublisher<[String: String], NetworkError> {
       return repository.requestUserAuth(to: code)
    }
}
