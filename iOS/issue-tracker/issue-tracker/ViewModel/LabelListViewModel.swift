//
//  LabelViewModel.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/15.
//

import Foundation
import RxSwift
import RxCocoa

class LabelListViewModel {
    let networkManager: NetworkManager
    var labelList = BehaviorRelay<[IssueLabel]>(value: [])
    var bag = DisposeBag()

    init(networkManager: NetworkManager) {
        self.networkManager = networkManager
        fetchLabelList()
    }

    func fetchLabelList() {
        networkManager.request(url: Endpoint(path: .label).url()!, decodableType: LabelList.self) { label in
            self.labelList.accept(label.data)
        }
    }

}
