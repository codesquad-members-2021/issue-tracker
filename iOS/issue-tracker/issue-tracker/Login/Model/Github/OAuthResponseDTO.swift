//
//  OAuthResponseDTO.swift
//  issue-tracker
//
//  Created by jinseo park on 6/10/21.
//

import Foundation

struct OAuthResponseDTO: Decodable {
    let jwt: String
    let avatarUrl: String
    let loginId: String
    
    enum CodingKeys: String, CodingKey {
        case jwt
        case avatarUrl
        case loginId
    }
}
