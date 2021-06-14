//
//  IssueDetail.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/14.
//

import Foundation

// MARK: - Welcome
struct IssueDetail: Codable {
    let data: Issue
}

// MARK: - DataClass
struct Issue: Codable {
    let id: Int?
    let title: String
    let issueNumber: Int
    let isOpen: Bool
    let createdTime: String
    let author: Author
    let label: [IssueLabel]
    let assignee: [Author]?
    let milestone: Milestone
    let comment: [Comment]?

    enum CodingKeys: String, CodingKey {
        case id
        case title
        case issueNumber = "issue_number"
        case isOpen
        case createdTime = "created_time"
        case author, label, assignee, milestone, comment
    }
}

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


// MARK: - Milestone
struct Milestone: Codable {
    let id: Int
    let title: String
    let closedIssueCount, openedIssueCount: Int?
}
