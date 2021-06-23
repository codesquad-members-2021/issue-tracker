//
//  NewIssueViewModel.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/21.
//

import Foundation

class NewIssueViewModel {
    var title: String?
    var content: String?

    func post(completion: @escaping () -> Void) {
        guard let url = Endpoint(path: .label).url() else {
            return
        }
        guard let title = title, let content = content, !content.isEmpty else {
            assertionFailure("issue post fail")
            return
        }
        let newIssue = NewIssue(title: title, comment: content)
        NetworkManager().postRequest(url: url, encodable: newIssue) {
            completion()
        }
    }
}
