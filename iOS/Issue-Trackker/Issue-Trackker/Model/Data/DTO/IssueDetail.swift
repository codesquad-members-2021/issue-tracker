//
//  IssueDetail.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/14.
//

import Foundation

struct IssueDetail: Decodable {
    var issues: [Issue]
    var text: String
    var status: String
    var writerAvatarImage: String
    var comments: [Comment]
}
