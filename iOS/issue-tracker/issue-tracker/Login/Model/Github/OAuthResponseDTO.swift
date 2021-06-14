//
//  OAuthResponseDTO.swift
//  issue-tracker
//
//  Created by jinseo park on 6/10/21.
//

import Foundation

struct JWT: Decodable {
    let jwt: String
    let tokenType: String

    enum CodingKeys: String, CodingKey {
        case jwt
        case tokenType
    }
}

struct OAuthResponseDTO: Decodable {
    let jwt: JWT
    let avatarUrl: String
    let loginId: String
    
    enum CodingKeys: String, CodingKey {
        case jwt
        case avatarUrl
        case loginId
    }
}
