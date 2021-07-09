//
//  Issues.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/02.
//

import Foundation

struct IssueList: Decodable {
    let issues: [Issue]
}

struct Issue: Codable {
    let issueId: Int
    let milestoneInfo: MilestoneInfo?
    let title, content, status: String
    let writer: Writer
    let createdDateTime: String
    let assignees: [Assignee]
    let labels: [Label]
}

struct Assignee: Codable {
    let id, name: String
    let avatarUrl: String
}

struct Writer: Codable {
    let name: String
    let avatarUrl: String
}

struct Label: Codable {
    let id: Int
    let title, description, backgroundColor, textColor: String
}

struct MilestoneInfo: Codable {
    let title, description, status: String
    let dueDate: String?
}
