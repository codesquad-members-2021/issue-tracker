//
//  EndPoint.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/11.
//

import Foundation

struct IssueEndPoint {
    static let scheme = "https"
    static let host = "f88e009a-3e2b-4862-838e-1f2cde9b95ed.mock.pstmn.io"
    static let basicPath = "/api/issues"
//    static let countPath = "/count"
    
    static func url() -> URL {
        var components = URLComponents()
        components.scheme = IssueEndPoint.scheme
        components.host = IssueEndPoint.host
        components.path = IssueEndPoint.basicPath
        return components.url!
    }
}

