//
//  Issue.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/13.
//

import Foundation

struct Issue: Decodable {
    var id: Int
    var title: String
    var writer: String
    var writeTime: String
    var milestone: Milestone
    var assignments: [Assignment]
    var labels: [Label]
}



