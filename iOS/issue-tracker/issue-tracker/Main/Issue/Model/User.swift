//
//  User.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import Foundation

struct User: Decodable, Identifiable {
    private(set) var id: Int
    private(set) var name: String
    private(set) var imageUrl: String
    
    func identifier() -> Int {
        return id
    }
}
