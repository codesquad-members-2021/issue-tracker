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
        NetworkManager().postRequest(url: url, encodable: post) { result in
            switch result {
            case .success:
                CustomAlertView.shared.setUpAlertView(title: "성공", message: "라벨이 등록되었습니다.", buttonTitle: "확인", alertType: .success, buttonHandler: nil)
            case .failure:
                CustomAlertView.shared.setUpAlertView(title: "실패", message: "서버가 불안정합니다. 다시 시도해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
            }
        }
    }
}
