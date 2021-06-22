//
//  IssueDetailViewModel.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/22.
//

import Foundation
import RxCocoa

class IssueDetailViewModel {
    var subject: BehaviorRelay<IssueDetail?> = BehaviorRelay(value: nil)
    let issueId: String

    init(id: String) {
        self.issueId = id
    }

    func fetch() {
        guard let url = Endpoint(path: .issue).url(id: issueId) else { return }
        NetworkManager().request(url: url, decodableType: IssueDetail.self) { [weak self] data in
            self?.subject.accept(data)
        }
    }
}
