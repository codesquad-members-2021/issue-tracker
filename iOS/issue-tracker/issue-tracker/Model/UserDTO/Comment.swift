//
//  Comment.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/14.
//

import Foundation

// MARK: - Comment
struct Comment: Codable {
    let id: Int
    let author: Author
    let isMine: Bool
    let createdTime, content: String

    enum CodingKeys: String, CodingKey {
        case id, author
        case isMine = "is_mine"
        case createdTime = "created_time"
        case content
    }
}

struct PostComment: Codable {
    let writer: String
    let comment: String
}
