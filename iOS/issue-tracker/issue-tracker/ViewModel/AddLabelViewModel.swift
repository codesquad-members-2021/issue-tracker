//
//  AddLabelViewModel.swift
//  issue-tracker
//
//  Created by zeke on 2021/06/16.
//

import Foundation
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
        let encodableLabel = IssueLabel(id: nil, title: title.value, color: color.value, fontColor: nil, description: description.value)
        networkManager.postRequest(url: Endpoint(path: .label).url()!, encodable: encodableLabel, completion: { result in
            switch result {
            case .success:
                CustomAlertView.shared.setUpAlertView(title: "성공", message: "라벨이 등록되었습니다.", buttonTitle: "확인", alertType: .success, buttonHandler: {
                    completion()
                })
            case .failure:
                CustomAlertView.shared.setUpAlertView(title: "실패", message: "서버가 불안정합니다. 다시 시도해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
            }
        })
    }
}
