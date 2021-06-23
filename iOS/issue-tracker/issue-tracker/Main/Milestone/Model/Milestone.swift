//
//  Milestone.swift
//  issue-tracker
//
//  Created by jinseo park on 6/18/21.
//

import Foundation

struct MileStone: Decodable, Identifiable {
    let id: Int
    let title: String
    let description: String?
    let dueDate: String?
    
    enum CodingKeys: String, CodingKey {
        case id
        case title
        case description
        case dueDate = "due_date"
    }
    
    func identifier() -> Int {
        return id
    }
}
