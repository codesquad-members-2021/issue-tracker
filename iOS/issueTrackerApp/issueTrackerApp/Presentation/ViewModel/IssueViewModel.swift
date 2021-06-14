//
//  IssueViewModel.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/14.
//

import Foundation

protocol IssueViewModelProtocol {
    var issues: [Issue] { get }
    func fetchAllIssue()
}

class IssueViewModel: IssueViewModelProtocol {
    var networkController: IssueNetworkController?
    var issues: [Issue] = [] {
        didSet {
            NotificationCenter.default.post(name: .didReceiveIssueData, object: nil)
        }
    }
    
    init(issueNetworkController: IssueNetworkController) {
        self.networkController = issueNetworkController
    }
    
    func fetchAllIssue() {
        networkController?.fetchIssues(completion: { (issues) in
            self.issues = issues
        })
    }
    
}
