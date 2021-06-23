//
//  CommonDTO.swift
//  issue-tracker
//
//  Created by Song on 2021/06/23.
//

import Foundation

struct CommonDTO<T: Decodable>: Decodable {
    let data: [T]?
    let error: String?
}
