//
//  TabBarItem.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/10.
//

import Foundation

enum TabBarItemType: CaseIterable, CustomStringConvertible {
    case issue
    case label
    case milestone
    case info

    var description: String {
        switch self {
        case .issue:
            return "이슈"
        case .label:
            return "레이블"
        case .milestone:
            return "마일스톤"
        case .info:
            return "내정보"
        }
    }

    var controllerIdentifier: String {
        switch self {
        case .issue:
            return "IssueListViewController"
        case .label:
            return ""
        case .milestone:
            return ""
        case .info:
            return ""
        }
    }

    var imageName: String {
        switch self {
        case .issue:
            return "exclamationmark.circle"
        case .label:
            return "tag"
        case .milestone:
            return "signpost.right"
        case .info:
            return ""
        }
    }
}
