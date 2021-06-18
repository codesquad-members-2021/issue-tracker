//
//  Issue.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/09.
//

import Foundation

struct Issue {
    let id: Int
    let number: Int
    let title: String
    let description: String
    let isOpened: Bool
    let isMyCommentExist: Bool
    let timeStamp: String
    let writer: User
    let assignees: [User]?
    let labels: [Label]?
    let milestone: Milestone?
}
