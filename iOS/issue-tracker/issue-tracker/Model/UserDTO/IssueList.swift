//
//  IssueList.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/14.
//

import Foundation

// MARK: - IssueList
struct IssueList: Codable {
    let data: [Issue]
}

// MARK: - Author
struct Author: Codable {
    let id: Int
    let name: String
    let imageURL: String

    enum CodingKeys: String, CodingKey {
        case id, name
        case imageURL = "image_url"
    }
}

// MARK: - Label
struct IssueLabel: Codable {
    let id: Int
    let title, color: String
}


