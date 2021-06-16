//
//  User.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/13.
//

import Foundation

struct User: Codable, Equatable {
    var userId: Int
    var profileImage: String
    var userName: String
    var jwtToken: String
    
    static let empty = Self()
    
    init() {
        self.profileImage = ""
        self.userName = ""
        self.userId = 0
        self.jwtToken = ""
    }
}
