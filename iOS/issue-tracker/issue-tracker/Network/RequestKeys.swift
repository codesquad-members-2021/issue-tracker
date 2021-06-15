//
//  RequestKeys.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import Foundation

enum Parameter {
    case code
    
    func key() -> String {
        switch self {
        case .code:
            return "code"
        }
    }
}

enum Header {
    case authorization
    
    func key() -> String {
        switch self {
        case .authorization:
            return "Authorization"
        }
    }
}
