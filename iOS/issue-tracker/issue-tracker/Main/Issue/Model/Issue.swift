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

struct Author: Decodable {
    private(set) var id: Int
    private(set) var name: String
    private(set) var imageUrl: String
    
    enum CodingKeys: String, CodingKey {
        case id
        case name
        case imageUrl
    }
}

struct Assignee: Decodable {
    private(set) var id: Int
    private(set) var name: String
    private(set) var imageUrl: String
    
    enum CodingKeys: String, CodingKey {
        case id
        case name
        case imageUrl
    }
}

struct IssueLabel: Decodable {
    private(set) var id: Int
    private(set) var name: String
    private(set) var colorCode: String
    
    enum CodingKeys: String, CodingKey {
        case id
        case name
        case colorCode = "color_code"
    }
}

struct IssueMileStone: Decodable {
    private(set) var id: Int
    private(set) var title: String
    
    enum CodingKeys: String, CodingKey {
        case id
        case title
    }
}

struct Issue: Decodable {
    private(set) var issueNumber: Int
    private(set) var title: String?
    private(set) var status: Bool
    private(set) var author: Author
    private(set) var assignees: [Assignee]?
    private(set) var labels: [IssueLabel]?
//    private(set) var milestone: IssueMileStone?
    private(set) var milestone: MileStone?
    private(set) var createdDate: String
    
    enum CodingKeys: String, CodingKey {
        case issueNumber
        case title
        case status
        case author
        case assignees
        case labels
        case milestone
        case createdDate = "created_date"
    }
}
