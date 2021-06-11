//
//  StoryBoardIdentity.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/09.
//

import Foundation

enum StoryBoardIdentity {
    case Main
    case IssueList
}

enum ViewControllerIdentity: CustomStringConvertible {
    case IssueListFilterViewController
    
    var description: String {
        return "IssueListFilterViewController"
    }
}
