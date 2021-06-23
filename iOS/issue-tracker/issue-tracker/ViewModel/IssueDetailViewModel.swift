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

    func fetch(id: Int) {
        guard let url = Endpoint(path: .issue).url(id: id) else { return }
        NetworkManager().request(url: url, decodableType: IssueDetail.self) { [weak self] data in
            self?.subject.accept(data)
        }
    }

    func post(comment: String) {
        guard let url = Endpoint(path: .issue).url(id: 1) else { return }
        let post = PostComment(writer: "Soo", comment: comment)
        NetworkManager().postRequest(url: url, encodable: post) {
            print("success")
        }
    }
}
