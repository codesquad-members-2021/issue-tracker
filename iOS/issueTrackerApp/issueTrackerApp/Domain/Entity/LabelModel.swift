//
//  Label.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/10.
//

import Foundation

struct LabelModel: Codable {
    let title, description, colorCode: String

    enum CodingKeys: String, CodingKey {
        case title
        case description = "description"
        case colorCode = "color_code"
    }
}
