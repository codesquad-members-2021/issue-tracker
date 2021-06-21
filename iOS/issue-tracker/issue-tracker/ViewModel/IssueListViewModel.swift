//
//  IssueListViewModel.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/21.
//

import Foundation
import RxCocoa

class IssueListViewModel {

    let issueList = BehaviorRelay<[Issue]>(value: [])
    let networkManager: Networkable
    var selectMode = BehaviorRelay<Bool>(value: false)

    init(networkManager: Networkable) {
        self.networkManager = networkManager
    }

    func fetchIssueList() {
        networkManager.request(url: Endpoint(path: .issue).url()!, decodableType: IssueList.self) { issueList in
            self.issueList.accept(issueList.data)
        }
    }

    func deleteIssue(id: Int) {
        networkManager.deleteRequest(url: Endpoint(path: .issue).url(id: 1)!) {
            print("success")
        }
    }
}
