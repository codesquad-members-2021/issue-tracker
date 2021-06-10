//
//  LoginService.swift
//  issue-tracker
//
//  Created by Song on 2021/06/10.
//

import Foundation

enum LoginService: CaseIterable {
    case github
    case apple
}

extension LoginService: CustomStringConvertible {
    var description: String {
        switch self {
        case .github:
            return "github"
        case .apple:
            return "apple"
        }
    }
}
