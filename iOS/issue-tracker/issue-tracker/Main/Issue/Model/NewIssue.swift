//
//  NewIssue.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import Foundation

struct NewIssue: Encodable {
    let title: String
    let comment: String
    let assigneeIds: [Int]
    let labelIds: [Int]
    let milestoneId: Int?
    
    init(title: String, comment: String?, assigneeIds: [Int]?, labelIds: [Int]?, milestoneId: Int?) {
        self.title = title
        self.comment = comment ?? ""
        self.assigneeIds = assigneeIds ?? []
        self.labelIds = labelIds ?? []
        self.milestoneId = milestoneId
    }
}
