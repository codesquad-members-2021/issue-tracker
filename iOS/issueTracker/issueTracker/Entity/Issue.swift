//
//  Issue.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/11.
//

import Foundation

struct IssueDTO: Codable {
    var issueId: Int
    var history: Histroy
    var isOpen: Bool
    var title: String
    var contents: String
    var assignees: [User]?
    var author: User?
    var milestone: Milestone
    var issueCount: IssueCount
    var labels: [Label]
    var comments: [Comment]?
}
