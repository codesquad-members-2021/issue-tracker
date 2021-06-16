//
//  SendIssue.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/13.
//

import Foundation

struct IssueRequest {
    var title: String
    var contents: String
    var assignees: [String]
    var authorName: String
    var labels: [Int]
    var milestone: Int
}
