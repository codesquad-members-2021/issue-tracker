//
//  JWT.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import Foundation

struct JWT: Codable {
    let jwt: String
    let tokenType: String

    enum CodingKeys: String, CodingKey {
        case jwt
        case tokenType
    }
}

extension JWT: CustomStringConvertible {
    var description: String {
        return "\(tokenType) \(jwt)"
    }
}
