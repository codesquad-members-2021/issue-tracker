//
//  IssueList.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/14.
//

import Foundation

// MARK: - IssueList
struct IssueList: Codable {
    let data: [Issue]
}

// MARK: - IssueDetail
struct IssueDetail: Codable {
    let data: Issue
}

// MARK: - Issue
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

// MARK: - Author
struct Author: Codable {
    let id: Int
    let name: String
    let imageURL: String

    enum CodingKeys: String, CodingKey {
        case id, name
        case imageURL = "image_url"
    }
}

// MARK: - IssueLabel
struct IssueLabel: Codable {
    let id: Int
    let title, color: String
    let fontColor: String?
    let description: String?
}
