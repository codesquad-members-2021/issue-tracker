//
//  PatchIssue.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/22.
//

import Foundation

struct PatchIssue: Encodable {
    let data: PatchData
}

struct PatchData: Encodable {
    let issueNumber: [Int]
    let isOpen: Bool

    enum CodingKeys: String, CodingKey {
        case issueNumber = "issue_ids"
        case isOpen = "is_open"
    }
}
