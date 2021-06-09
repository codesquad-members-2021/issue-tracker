//
//  Milestone.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/09.
//

import Foundation

struct Milestone {
    var id: Int
    var name: String
    var description: String
    var isOpend: Bool
    var openedIssueCount: Int
    var closedIssueCount: Int
}
