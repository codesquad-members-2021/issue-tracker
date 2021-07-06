import Foundation
import Combine

class MilestoneListViewModel {
    
    @Published private var milestoneList: MilestoneList
    private let milestoneListUseCase: MilestoneListUseCase
    
    init() {
        self.milestoneList = MilestoneList(Milestones: [])
        self.milestoneListUseCase = MilestoneListUseCase()
    }
    
    func fetchMilestoneList() {
        milestoneListUseCase.executeFetchingMilestoneList { result in
            switch result {
            case .failure(let error):
                print(error.localizedDescription)
            case .success(let milestoneList):
                self.milestoneList = milestoneList
            }
        }
    }
    
    func didUpdateMilestoneList() -> AnyPublisher<MilestoneList, Never> {
        return $milestoneList
            .print()
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func getDetailMilestoneCount() -> Int {
        return milestoneList.Milestones.count
    }

    func getDetailMilestone(indexPath: IndexPath) -> DetailMilestone {
        return milestoneList.Milestones[indexPath.row]
    }
    
}
