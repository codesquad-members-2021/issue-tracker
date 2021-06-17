//
//  Issue.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/11.
//

import Foundation

struct IssueResponse: Codable {
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
    
    static let empty = Self()
    
    init() {
        self.issueId = 0
        self.history = Histroy.empty
        self.isOpen = false
        self.title = ""
        self.contents = ""
        self.assignees = []
        self.author = User.empty
        self.milestone = Milestone.empty
        self.issueCount = IssueCount.empty
        self.labels = []
        self.comments = []
    }
}
