//
//  Label.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import Foundation

protocol Identifiable {
    func identifier() -> Int
}

struct Label: Decodable, Identifiable {
    private(set) var id: Int
    private(set) var title: String
    private(set) var body: String?
    private(set) var hexColorCode: String

    enum CodingKeys: String, CodingKey {
        case id
        case title = "name"
        case body = "content"
        case hexColorCode = "color_code"
    }
    
    func identifier() -> Int {
        return id
    }
}
