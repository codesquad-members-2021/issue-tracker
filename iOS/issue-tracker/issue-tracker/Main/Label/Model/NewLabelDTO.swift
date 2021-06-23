//
//  NewLabelDTO.swift
//  issue-tracker
//
//  Created by Song on 2021/06/16.
//

import Foundation

struct NewLabelDTO: Encodable {
    let name: String
    let content: String
    let colorCode: String
    
    enum CodingKeys: String, CodingKey {
        case name
        case content
        case colorCode = "color_code"
    }
}
