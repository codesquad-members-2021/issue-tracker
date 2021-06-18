//
//  IssueViewModel.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/09.
//

import Foundation

final class IssueViewModel {
    
    private(set) var issues: [Issue]
    private(set) var error: Error?
    
    private var fetchIssueListUseCase: FetchIssueListUseCase

    init(_ fetchIssueListUseCase: FetchIssueListUseCase) {
        self.fetchIssueListUseCase = fetchIssueListUseCase
        self.issues = []
        load()
    }
    
    private func load() {
        fetchIssueListUseCase.excute { result in
            switch result {
            case .success(let issues):
                self.issues = issues
            case .failure(let error):
                self.error = error
            }
        }
    }
}


extension IssueViewModel {

    func deleteIssue(at index: Int) {
        issues.remove(at: index)
    }
    
}
