//
//  Label.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/10.
//

import Foundation

struct Milestones: Codable {
    let title, description, dueDate: String
    let openedIssueCount, closedIssueCount: Int

    enum CodingKeys: String, CodingKey {
        case title
        case description
        case dueDate = "due_date"
        case openedIssueCount = "opened_issue_count"
        case closedIssueCount = "closed_issue_count"
    }
}
