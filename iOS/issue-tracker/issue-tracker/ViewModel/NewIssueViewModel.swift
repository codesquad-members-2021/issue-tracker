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
    let url = "https://77b8f295-a324-4645-9ff3-3d93eaf7b630.mock.pstmn.io/issue"

    func post(completion: @escaping () -> Void) {
        let url = URL(string: url)!
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
