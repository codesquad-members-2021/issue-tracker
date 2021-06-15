//
//  LoginInfo.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import Foundation

struct LoginInfo: Codable {
    let userID: String?
    let jwt: JWT
    let avatarURL: String?
    let name: String
}
