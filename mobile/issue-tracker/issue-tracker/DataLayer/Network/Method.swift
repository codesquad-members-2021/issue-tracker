//
//  NetWorkMethod.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation

enum Method {
    case get
    case post

    static func status(_ value: Self) -> String {
        switch value {
        case .get:
            return "GET"
        case .post:
            return "POST"
        }
    }
}
