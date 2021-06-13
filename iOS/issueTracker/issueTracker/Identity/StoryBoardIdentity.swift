//
//  StoryBoardIdentity.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/09.
//

import Foundation

enum StoryBoardIdentity {
    case main
    case issueList
}

enum ViewControllerIdentity: CustomStringConvertible {
    case issueListFilterViewController
    var description: String {
        return "IssueListFilterViewController"
    }
}
