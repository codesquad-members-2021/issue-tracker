//
//  NewIssue.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/14.
//

import Foundation

struct NewIssue: Codable {
    var title: String
    let comment: String
    let labelID: [Int] = []
    let milestoneID: Int? = nil
    let assigneeID: [Int] = []

    enum CodingKeys: String, CodingKey {
        case title, comment
        case labelID = "label_ids"
        case milestoneID = "milestone_id"
        case assigneeID = "assignee_id"
    }
}
