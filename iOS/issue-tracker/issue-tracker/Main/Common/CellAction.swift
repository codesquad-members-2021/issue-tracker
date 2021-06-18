//
//  CellAction.swift
//  issue-tracker
//
//  Created by Song on 2021/06/18.
//

import Foundation

enum CellAction {
    case delete
    case edit
    case close
    
    func buttonTitle() -> String {
        switch self {
        case .delete:
            return "삭제"
        case .edit:
            return "수정"
        case .close:
            return "닫기"
        }
    }
}
