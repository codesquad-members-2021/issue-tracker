//
//  LabelViewModel.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/15.
//

import Foundation
import RxSwift

class LabelListViewModel {
    let networkManager: NetworkManager
    var labelList: Observable<[IssueLabel]>? = nil
    
    init(networkManager: NetworkManager, labelList: Observable<[IssueLabel]>? = nil) {
        self.networkManager = networkManager
        self.labelList = labelList
        fetchLabelList()
    }
    
    func fetchLabelList() {
        networkManager.request(url: Endpoint(path: .label).url()!, decodableType: LabelList.self) { labelList in
            self.labelList = Observable<[IssueLabel]>.of(labelList.labels)
        }
    }

}
