//
//  URLRouter.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/22.
//

import Foundation

enum URLRouter {
    case auth
    case issues
    case github

    var path: String {
        switch self {
        case .auth:
            return "auth"
        case .issues:
            return "issues"
        case .github:
            return ""
        }
    }
}
