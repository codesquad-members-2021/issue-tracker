//
//  EndPoint.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import Foundation

enum EndPoint {
    static let baseAddress = "http://3.34.122.67/api"
    
    case OAuth
    case issue
    case label
    case milestone
    case user
    case none
    
    func path() -> String {
        switch self {
        case .OAuth:
            return "/login/ios"
        case .issue:
            return "/issues"
        case .label:
            return "/labels"
        case .milestone:
            return "/milestones"
        case .user:
            return "/users"
        case .none:
            return ""        
        }
    }
    
    func path(with id: Int) -> String {
        return path() + "/\(id)"
    }
}
