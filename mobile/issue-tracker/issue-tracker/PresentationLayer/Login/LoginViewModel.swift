//
//  LoginViewModel.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import Foundation
import Combine

class LoginViewModel {

    private let loginService = LoginService()
    private var cancellable = Set<AnyCancellable>()

    @Published private var message = ""

    func fetchToken(to code: Encodable) {
        loginService.fetchToken(to: code).sink { fail in
            if case .failure(let error) = fail {
                self.message = error.description
            }
        } receiveValue: { _ in

        }.store(in: &cancellable)
    }

    func fetchErrorMessage() -> AnyPublisher<String, Never> {
        return $message
            .dropFirst()
            .eraseToAnyPublisher()
    }
}
