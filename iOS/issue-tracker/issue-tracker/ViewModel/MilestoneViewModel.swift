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
        networkManager.postRequest(url: url, encodable: mile) { [weak self] in
            self?.fetch(completion: self?.completion)
        }
    }
}
