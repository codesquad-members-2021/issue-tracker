//
//  NewMileStoneDTO.swift
//  issue-tracker
//
//  Created by jinseo park on 6/20/21.
//

import Foundation

struct NewMileStoneDTO: Encodable {
    
    let title: String
    let description: String
    let dueDate: String
    
    enum CodingKeys: String, CodingKey {
        case title
        case description
        case dueDate = "due_date"
    }
}
