//
//  Issue.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/09.
//

import Foundation

struct Issue {
    var id: Int
    var number: Int
    var title: String
    var description: String
    var isOpened: Bool
    var isHaveMyComment: Bool
    var timeStamp: String
    var writer: User
    var assignees: [User]?
    var labels: [Label]
    var milestone: Milestone
}
