//
//  IssuesListViewModel.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/02.
//

import Foundation
import Combine

final class IssuesListViewModel {

    private var issuesUseCase: IssuesUseCase
    private var endpoint: EndPointGenerator
    private var cancellable = Set<AnyCancellable>()

    var errorHandler: ((NetworkError) -> Void)?
    var issuesList: (([Issue]) -> Void)?

    init(issuesUseCase: IssuesUseCase = IssueRepository(),
         endpoint: EndPointGenerator = EndPoint()) {
        self.issuesUseCase = issuesUseCase
        self.endpoint = endpoint
    }

    func fetchIssuesList() {
        issuesUseCase.requestIssues(url: endpoint.url(router: .issues),
                                    session: .shared)
            .sink { [weak self] (complete) in
                if case .failure(let error) = complete {
                    self?.errorHandler?(error)
                }
            } receiveValue: { [weak self] (issues) in
                self?.issuesList?(issues.issue)
            }.store(in: &cancellable)
    }
}
