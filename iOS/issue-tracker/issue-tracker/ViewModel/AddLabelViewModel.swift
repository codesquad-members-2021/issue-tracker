//
//  AddLabelViewModel.swift
//  issue-tracker
//
//  Created by zeke on 2021/06/16.
//

import Foundation
import RxSwift
import RxCocoa

class AddLabelViewModel {
    var title = BehaviorRelay<String>(value: "")
    var description = BehaviorRelay<String>(value: "")
    var color = BehaviorRelay<String>(value: "3DDCFF")
    var fontColor = "#FFFFFF"
    var networkManager: Networkable

    init(networkManager: Networkable) {
        self.networkManager = networkManager
    }

    func postAddedLabel(completion: @escaping () -> Void) {
        let encodableLabel = IssueLabel(id: nil, title: title.value, color: color.value, fontColor: fontColor, description: description.value)
        networkManager.postRequest(url: Endpoint(path: .label).url()!, encodable: encodableLabel, completion: completion)
    }
}
