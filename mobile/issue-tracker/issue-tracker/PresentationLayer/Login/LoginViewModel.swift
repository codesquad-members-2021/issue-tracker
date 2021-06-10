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

    func fetchToken(to code: Encodable) {
        loginService.fetchToken(to: code).sink { _ in
        } receiveValue: { value in
            print(value)
        }.store(in: &cancellable)
    }

}
