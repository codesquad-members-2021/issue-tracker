//
//  Milestone.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/13.
//

import Foundation

struct Milestone: Codable {
    var milestoneId: Int?
    var title: String
    var deadLineDate: String
    var description: String
    var issueCount: IssueCount?
}
