//
//  Issue.swift
//  issue-tracker
//
//  Created by jinseo park on 6/22/21.
//

import Foundation


struct IssueDTO: Decodable {
    let data: [Issue]?
    let message: String?
    
    enum CodingKeys: String, CodingKey {
        case data
        case message = "msg"
    }
}

class Author: Decodable {
    private(set) var id: Int
    private(set) var name: String
    private(set) var imageUrl: String
    
    enum CodingKeys: String, CodingKey {
        case id
        case name
        case imageUrl
    }
}

class Assignee: Decodable {
    private(set) var id: Int
    private(set) var name: String
    private(set) var imageUrl: String
    
    enum CodingKeys: String, CodingKey {
        case id
        case name
        case imageUrl
    }
}
class Issue: Decodable {
    private(set) var issueNumber: Int
    private(set) var title: String
    private(set) var status: Bool
    private(set) var author: Author
    private(set) var assignees: [Assignee]
    private(set) var labels: [Label]
    private(set) var milestone: MileStone
    private(set) var created_date: String
    
    init(issueNumber: Int, title: String, status: Bool, author: Author, assignees: [Assignee], labels: [Label], milestone: MileStone, created_date: String) {
        self.issueNumber = issueNumber
        self.title = title
        self.status = status
        self.author = author
        self.assignees = assignees
        self.labels = labels
        self.milestone = milestone
        self.created_date = created_date
    }
    
    enum CodingKeys: String, CodingKey {
        case issueNumber
        case title
        case status
        case author
        case assignees
        case labels
        case milestone
        case created_date = "createdDate"
    }
}
