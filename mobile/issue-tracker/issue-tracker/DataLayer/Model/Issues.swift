//
//  Issues.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/02.
//

import Foundation

struct Issues: Decodable {
    let issue: [Issue]
}

struct Issue: Decodable {
    let issueId: Int
    let milestoneInfo: MilestoneInfo
    let title, content, status: String
    let writer: Writer
    let createdDateTime: String
    let assignees: Assignees
    let labels: Labels
}

struct Assignees: Codable {
    let users: [Writer]
}

struct Writer: Codable {
    let id, name: String?
    let profileImageUrl: String?
    let emails: [String]?
}

struct Labels: Codable {
    let labels: [Label]
}

struct Label: Codable {
    let id: Int
    let title: Title
    let description: Description
    let backgroundColorHexa: BackgroundColorHexa
    let textColorHexa: TextColorHexa
}

enum BackgroundColorHexa: String, Codable {
    case ff0000 = "#FF0000"
}

enum Description: String, Codable {
    case 라벨설명1 = "라벨 설명1"
    case 라벨설명2 = "라벨 설명2"
    case 라벨설명3 = "라벨 설명3"
}

enum TextColorHexa: String, Codable {
    case the000000 = "#000000"
}

enum Title: String, Codable {
    case 라벨타이틀4 = "라벨 타이틀4"
    case 라벨타이틀5 = "라벨 타이틀5"
    case 라벨타이틀6 = "라벨 타이틀6"
}

struct MilestoneInfo: Codable {
    let title, description, dueDate: String
}
