//
//  Comment.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/10.
//

import Foundation

struct Comment: Codable {
    let description, createdTime: String
    let user: User

    enum CodingKeys: String, CodingKey {
        case description = "description"
        case createdTime = "created_time"
        case user
    }
}

struct User: Codable {
    let name: String
    let avatarURL: String
    let editable: Bool

    enum CodingKeys: String, CodingKey {
        case name
        case avatarURL = "avatar_url"
        case editable
    }
}
