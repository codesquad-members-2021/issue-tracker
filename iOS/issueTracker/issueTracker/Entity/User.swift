//
//  User.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/13.
//

import Foundation

struct User: Codable {
    var profileImage: String
    var userName: String
    
    static let empty = Self()
    
    init() {
        self.profileImage = ""
        self.userName = ""
    }
}
