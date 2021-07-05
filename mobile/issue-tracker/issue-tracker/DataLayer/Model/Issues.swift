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

struct Issue: Decodable {
    let issueId: Int
    let milestoneInfo: MilestoneInfo
    let title, content, status: String
    let writer: Writer?
    let createdDateTime: String
    let assignees: Assignees
    let labels: Labels
}

struct Assignees: Codable {
    let users: [Writer]
}

struct Writer: Codable {
    let id, name: String?
    let profileImageUrl: String?
    let emails: [String]?
}

struct Labels: Codable {
    let labels: [Label]
}

struct Label: Codable {
    let id: Int
    let title: String
    let description: String
    let backgroundColorHexa: String
    let textColorHexa: String
}

struct MilestoneInfo: Codable {
    let title, description, dueDate: String
}
