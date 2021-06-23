import Foundation
import Combine

class IssueListViewModel {
    
    @Published private var issueList: IssueList
    private let fetchIssueListUseCase: IssueListUseCase
    private var subscriptions: Set<AnyCancellable>

    init() {
        self.issueList = IssueList(issues: [])
        self.fetchIssueListUseCase = IssueListUseCase()
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func fetchIssueList() {
        fetchIssueListUseCase.executeFetchingIssueList { result in
            switch result {
            case .failure(let error):
                print(error.localizedDescription)
            case .success(let issueList):
                self.issueList = issueList
            }
        }
    }
    
    // issueList를 넘기는 부분 수정하기
    func didUpdateIssueList() -> AnyPublisher<IssueList, Never> {
        return $issueList
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func getIssueCount() -> Int {
        return issueList.issues.count
    }
    
    func getIssue(indexPath: IndexPath) -> Issue {
        return issueList.issues[indexPath.row]
    }
    
}
