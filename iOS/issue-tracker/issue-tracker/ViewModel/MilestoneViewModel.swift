//
//  MilestoneViewModel.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/16.
//

import Foundation
import RxSwift

class MilestoneViewModel {
    var subject: Observable<[Milestone]> = Observable.just([])
    var model: [String: String] = ["제목": "", "설명": "", "완료일": ""]

    init() {
        let urlString = "https://77b8f295-a324-4645-9ff3-3d93eaf7b630.mock.pstmn.io/milestone"
        let url = URL(string: urlString)!
        NetworkManager().request(url: url, decodableType: MilestoneList.self) { [weak self] data in
            self?.subject = Observable.just(data.milestone)
        }
    }
}
