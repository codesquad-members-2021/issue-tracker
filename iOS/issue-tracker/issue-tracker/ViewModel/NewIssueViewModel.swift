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
        NetworkManager().postRequest(url: url, encodable: newIssue) { result in
            switch result {
            case .success:
                CustomAlertView.shared.setUpAlertView(title: "성공", message: "라벨이 등록되었습니다.", buttonTitle: "확인", alertType: .success, buttonHandler: completion)
            case .failure:
                CustomAlertView.shared.setUpAlertView(title: "실패", message: "서버가 불안정합니다. 다시 시도해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
            }
        }
    }
}
