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
    func deleteIssue(at index: Int, completionHandler: @escaping () -> Void)
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
    
    init(issueNetworkController: IssueNetworkController = IssueNetworkController()) {
        self.networkController = issueNetworkController
    }
    
    func fetchAllIssue() {
//        networkController?.fetchIssues(completion: { (issues) in
//            self.issues = issues
//        })
        let label1 = Label(id: 1, title: "123", colorCode: "#912939")
        let label2 = Label(id: 1, title: "121233", colorCode: "#153239")
        
        
        let issue1 = Issue(id: 123, title: "sdf", description: "sdfsdfsdf", authorAvatarURL: "sdf", labelList: [label1, label2], issueNumber: 1, createdAt: "sdf", milestoneTitle: "milsteon1")
        
        let issue2 = Issue(id: 13, title: "ssdfsdfdf", description: "sdfsdfsdf", authorAvatarURL: "sdf", labelList: [label1, label2], issueNumber: 1, createdAt: "sdf", milestoneTitle: "milsteon1")
        
        self.issues = [issue1, issue2]
    }
    
    func filterIssuesWithSearchText(_ string: String) {
        self.filteredIssues = issues.filter({ (issue: Issue) -> Bool in
            return issue.title.lowercased().contains(string.lowercased())
        })
    }
    
    func deleteIssue(at index: Int, completionHandler: @escaping () -> Void) {
        let issueId = issues[index].id
        networkController?.deleteIssue(with: issueId, completion: { (res) in
            if res.status == "success" {
                self.issues.remove(at: index)
                completionHandler()
            }
        })
    }
    
}
