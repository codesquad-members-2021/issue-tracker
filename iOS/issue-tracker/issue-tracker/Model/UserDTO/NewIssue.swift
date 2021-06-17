//
//  NewIssue.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/14.
//

import Foundation

struct NewIssue {
    let title: String
    let comment: String
    let labelsID: [Int]
    let milestoneID: Int
    let assigneeID: [Int]
    
    enum CodingKeys: String, CodingKey {
        case title, comment
        case labelsID = "labels_ids"
        case milestoneID = "milestone_id"
        case assigneeID = "assignee_id"
    }
}
