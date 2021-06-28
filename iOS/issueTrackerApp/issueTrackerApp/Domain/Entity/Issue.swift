//
//  Issue.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/10.
//

import Foundation

struct Issue: Codable {
    let id: Int
    let title: String
    let description: String
    let authorAvatarURL: String
    let labelList: [Label]
    let issueNumber: Int
    let createdAt: String
    let milestoneTitle: String

    enum CodingKeys: String, CodingKey {
        case id
        case title
        case description
        case authorAvatarURL = "author_avatar_url"
        case labelList = "label_list"
        case issueNumber = "issue_number"
        case createdAt = "created_time"
        case milestoneTitle = "milestone_title"
    }
}

struct Label: Codable {
    let id: Int
    let title, colorCode: String

    enum CodingKeys: String, CodingKey {
        case id
        case title
        case colorCode = "color_code"
    }
}
