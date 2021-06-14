//
//  UserList.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/14.
//

import Foundation

struct UserList: Decodable {
    let data: [User]
}

struct User: Decodable {
    let id: Int
    let name: String
    let imageUrl: String
    
    enum CodingKeys: String, CodingKey {
        case id, name
        case imageUrl = "image_url"
    }
}
