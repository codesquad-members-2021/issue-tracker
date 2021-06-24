//
//  MilestoneViewModel.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/16.
//

import Foundation
import RxCocoa

class MilestoneViewModel {
    static let shared = MilestoneViewModel()
    private let networkManager = NetworkManager()
    var subject: BehaviorRelay<[Milestone]> = BehaviorRelay<[Milestone]>(value: [])
    var milestone: [String: String] = [:]
    var completion: (() -> Void)?
    private var url: URL! {
        return Endpoint(path: .milestone).url()!
    }

    init() {
        fetch()
    }

    private func fetch(completion: (() -> Void)? = nil) {
        networkManager.request(url: url, decodableType: MilestoneList.self) { [weak self] data in
            self?.subject.accept(data.data)
            completion?()
        }
    }

    func checkInput() {
        // 타이틀 입력과 완료일 형식을 체크한다.
    }

    func post() {
        guard let title = milestone["title"] else {
            fatalError()
        }
        let description = milestone["description"]
        let dueDate = milestone["dueDate"]
        let mile = Milestone(id: 1, title: title, description: description, createdTime: nil, dueDate: dueDate, closedIssueCount: nil, openedIssueCount: nil)
        networkManager.postRequest(url: url, encodable: mile) { result in
            switch result {
            case .success:
                CustomAlertView.shared.setUpAlertView(title: "성공", message: "라벨이 등록되었습니다.", buttonTitle: "확인", alertType: .success, buttonHandler: { self.fetch() })
            case .failure:
                CustomAlertView.shared.setUpAlertView(title: "실패", message: "서버가 불안정합니다. 다시 시도해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
            }   
        }
    }
}
