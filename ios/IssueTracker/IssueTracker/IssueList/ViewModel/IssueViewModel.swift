//
//  IssueViewModel.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/09.
//

import Foundation

class IssueViewModel {
    
    private(set) var issues: [Issue]
    
    init(issues: [Issue]) {
        self.issues = issues
    }
    
}


extension IssueViewModel {

    func deleteIssue(at index: Int) {
        issues.remove(at: index)
    }
    
}
