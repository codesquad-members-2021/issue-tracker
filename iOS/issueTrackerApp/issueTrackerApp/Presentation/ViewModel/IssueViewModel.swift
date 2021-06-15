//
//  IssueViewModel.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/14.
//

import Foundation

protocol IssueViewModelProtocol {
    var issues: [Issue] { get }
    var filteredIssues: [Issue] { get set }
    func fetchAllIssue()
    func filterIssuesWithSearchText(_ string: String)
    func deleteIssue(at index: Int)
}

class IssueViewModel: IssueViewModelProtocol {
    var networkController: IssueNetworkController?
    var issues: [Issue] = [] {
        didSet {
            NotificationCenter.default.post(name: .didReceiveIssueData, object: nil)
        }
    }
    
    var filteredIssues: [Issue] = [] {
        didSet {
            NotificationCenter.default.post(name: .didFilterIssueData, object: nil)
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
    
    func filterIssuesWithSearchText(_ string: String) {
        self.filteredIssues = issues.filter({ (issue: Issue) -> Bool in
            return issue.title.lowercased().contains(string.lowercased())
        })
    }
    
    func deleteIssue(at index: Int) {
        
//        issues[index].id
        self.issues.remove(at: index)
    }
}
