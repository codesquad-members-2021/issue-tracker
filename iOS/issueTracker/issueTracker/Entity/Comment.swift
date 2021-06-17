//
//  Comment.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/13.
//

import Foundation

struct Comment: Codable {
    var authorId: Int
    var authorName: String
    var contents: String
}
