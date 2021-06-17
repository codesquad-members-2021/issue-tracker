//
//  Milestone.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/13.
//

import Foundation

struct Milestone: Codable, Equatable {
    var milestoneId: Int?
    var title: String
    var deadLineDate: String
    var description: String
    var issueCount: IssueCount?
    
    static let empty = Self()
    
    init() {
        self.milestoneId = 0
        self.title = ""
        self.deadLineDate = ""
        self.description = ""
        self.issueCount = IssueCount.empty
    }
}
