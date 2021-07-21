import Foundation
import Combine

class LabelListViewModel {
    
    @Published private var labelList: LabelList
    private let labelListUseCase: LabelListUseCase
    
    init() {
        self.labelList = LabelList(labels: [])
        self.labelListUseCase = LabelListUseCase()
    }
    
    func fetchLabelList() {
        labelListUseCase.executeFetchingLabelList { result in
            switch result {
            case .failure(let error):
                print(error.localizedDescription)
            case .success(let labelList):
                self.labelList = labelList
            }
        }
    }
    
    func didUpdateLabelList() -> AnyPublisher<LabelList, Never> {
        return $labelList
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func getDetailLabelCount() -> Int {
        return labelList.labels.count
    }

    func getDetailLabel(indexPath: IndexPath) -> DetailLabel {
        return labelList.labels[indexPath.row]
    }
    
}
