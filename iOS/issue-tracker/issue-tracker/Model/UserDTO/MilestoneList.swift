//
//  MilestoneList.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/14.
//

import Foundation

struct MilestoneList: Codable {
    let data: [Milestone]
}

// MARK: - Milestone
struct Milestone: Codable {
    let id: Int
    let title: String
    let description: String?
    let createdTime: String?
    let dueDate: String?
    let closedIssueCount, openedIssueCount: Int?

    enum CodingKeys: String, CodingKey {
        case id, title, description
        case closedIssueCount = "closed_issue_count"
        case openedIssueCount = "opened_issue_count"
        case createdTime = "created_time"
        case dueDate = "due_date"
    }
}
