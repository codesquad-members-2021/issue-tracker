//
//  Milestone.swift
//  issue-tracker
//
//  Created by jinseo park on 6/18/21.
//

import Foundation


struct MileStoneDTO: Decodable {
    let data: [MileStone]?
    let message: String?
    
    enum CodingKeys: String, CodingKey {
        case data
        case message = "msg"
    }
}

struct MileStone: Decodable {
    let id: Int
    let title: String
    let description: String?
    let due_date: String?
    
    enum CodingKeys: String, CodingKey {
        case id
        case title
        case description
        case due_date
    }
    
}
