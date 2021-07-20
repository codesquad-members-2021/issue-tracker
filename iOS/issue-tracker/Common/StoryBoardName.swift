//
//  StoryBoardName.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/11.
//

import Foundation

enum StoryBoardName: String, CustomStringConvertible {
    case Main
    case IssueEdit
    case IssueList
    
    var description: String {
        return self.rawValue
    }
}
