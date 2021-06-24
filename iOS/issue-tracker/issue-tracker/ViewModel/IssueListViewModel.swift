//
//  IssueListViewModel.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/21.
//

import Foundation
import RxCocoa
import RxSwift

class IssueListViewModel {

    let issueList = BehaviorRelay<[Issue]>(value: [])
    let networkManager: Networkable
    var selectMode = BehaviorRelay<Bool>(value: false)
    var selectedCell = BehaviorRelay<[Issue]>(value: [])

    init(networkManager: Networkable) {
        self.networkManager = networkManager
    }

    func fetchIssueList() {
        networkManager.request(url: Endpoint(path: .issue).url()!, decodableType: IssueList.self) { issueList in
            self.issueList.accept(issueList.data)
        }
    }

    func deleteIssue(id: Int) {
        networkManager.deleteRequest(url: Endpoint(path: .issue).url(id: id)!) { result in
            switch result {
            case .success:
                CustomAlertView.shared.setUpAlertView(title: "성공", message: "이슈가 성공적으로 삭제되었습니다.", buttonTitle: "확인", alertType: .success, buttonHandler: {
                    self.fetchIssueList()
                })
            case .failure:
                CustomAlertView.shared.setUpAlertView(title: "실패", message: "서버가 불안정합니다. 다시 시도해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
            }
        }
    }

    func patchIssue(issues: [Issue]) {
        let encodableObject = PatchIssue(issueNumber: issues.map { $0.id! }, isOpen: false)
        networkManager.patchRequest(url: Endpoint(path: .issue).url()!, encodable: encodableObject) { result in
            switch result {
            case .success:
                CustomAlertView.shared.setUpAlertView(title: "성공", message: "이슈가 성공적으로 닫혔습니다.", buttonTitle: "확인", alertType: .success, buttonHandler: {
                    self.fetchIssueList()
                })
            case .failure(let error):
                print(error)
                CustomAlertView.shared.setUpAlertView(title: "실패", message: "서버가 불안정합니다. 다시 시도해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
            }
        }
    }
}
