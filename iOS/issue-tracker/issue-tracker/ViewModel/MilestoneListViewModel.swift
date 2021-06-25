import Foundation
import Combine

class MilestoneListViewModel {
    
    @Published private var milestoneList: MilestoneList
    private let milestoneListUseCase: MilestoneListUseCase
    private var subscriptions: Set<AnyCancellable>
    
    init() {
        self.milestoneList = MilestoneList(Milestones: [])
        self.milestoneListUseCase = MilestoneListUseCase()
        self.subscriptions = Set<AnyCancellable>()
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
