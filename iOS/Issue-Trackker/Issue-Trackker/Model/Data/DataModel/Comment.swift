//
//  Comment.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/14.
//

import Foundation

struct Comment: Decodable {
    var id: String
    var avatarImage: String
    var name: String
    var writeTime: String
    var text: String
}
