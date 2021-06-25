//
//  LabelViewModel.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/15.
//

import Foundation
import RxCocoa

class LabelListViewModel {
    let networkManager: NetworkManager
    var labelList = BehaviorRelay<[IssueLabel]>(value: [])

    init(networkManager: NetworkManager) {
        self.networkManager = networkManager
        fetchLabelList()
    }

    func fetchLabelList() {
        networkManager.request(url: Endpoint(path: .label).url()!, decodableType: LabelList.self) { [weak self] label in
            self?.labelList.accept(label.data)
        }
    }

    func deleteLabel(id: Int) {
        networkManager.deleteRequest(url: Endpoint(path: .label).url(id: id)!) { result in
            switch result {
            case .success:
                CustomAlertView.shared.setUpAlertView(title: "성공", message: "라벨이 성공적으로 삭제되었습니다.", buttonTitle: "확인", alertType: .success, buttonHandler: {
                    self.fetchLabelList()
                })
            case .failure(let error):
                print(error)
                CustomAlertView.shared.setUpAlertView(title: "실패", message: "서버가 불안정합니다. 다시 시도해주세요.", buttonTitle: "확인", alertType: .failure, buttonHandler: nil)
            }
        }
    }
}
