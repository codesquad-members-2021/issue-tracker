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
    case label
    case milestone
    
    func fullAddress() -> String {
        switch self {
        case .OAuth:
            return EndPoint.baseAddress + "/login/ios"
        case .label:
            return EndPoint.baseAddress + "/labels"
        case .milestone:
            return EndPoint.baseAddress + "/milestones"
        }
    }
    
    func fullAddress(with id: Int) -> String {
        return fullAddress() + "/\(id)"
    }
}
