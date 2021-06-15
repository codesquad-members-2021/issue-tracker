//
//  Label.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import Foundation

struct LabelDTO: Decodable {
    let data: [Label]?
    let message: String?
    
    enum CodingKeys: String, CodingKey {
        case data
        case message = "msg"
    }
}

class Label: Decodable {
    private(set) var id: Int
    private(set) var title: String
    private(set) var body: String
    private(set) var hexColorCode: String
    
    init(id: Int, title: String, body: String, hexColorCode: String) {
        self.id = id
        self.title = title
        self.body = body
        self.hexColorCode = hexColorCode
    }
    
    enum CodingKeys: String, CodingKey {
        case id
        case title = "name"
        case body = "content"
        case hexColorCode = "color_code"
    }
}
