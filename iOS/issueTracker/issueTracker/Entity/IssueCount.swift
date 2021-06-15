//
//  IssueCount.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/13.
//

import Foundation

struct IssueCount: Codable, Equatable {
    var open: Int
    var closed: Int
    
    static let empty = Self()
    
    init() {
        self.open = 0
        self.closed = 0
    }
}
