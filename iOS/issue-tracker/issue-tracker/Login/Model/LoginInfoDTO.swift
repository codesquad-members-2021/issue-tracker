//
//  LoginInfoDTO.swift
//  issue-tracker
//
//  Created by Song on 2021/06/17.
//

import Foundation

struct LoginInfoDTO: Codable {    
    let userID: String?
    let jwt: JWT
    let avatarURL: String?
    let name: String
}
