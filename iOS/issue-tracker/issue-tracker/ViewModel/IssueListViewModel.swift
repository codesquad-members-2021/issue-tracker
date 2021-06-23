import Foundation
import Combine

class IssueListViewModel {
    
    @Published private var issueList: IssueList
    private let issueListUseCase: IssueListUseCase
    private var subscriptions: Set<AnyCancellable>

    init() {
        self.issueList = IssueList(issues: [])
        self.issueListUseCase = IssueListUseCase()
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func fetchIssueList() {
        issueListUseCase.executeFetchingIssueList { result in
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
    
    func delete(indexPath: IndexPath, completion: @escaping (Bool) -> Void) {
        let issueID = issueList.issues[indexPath.row].id
        issueListUseCase.executeDeleteIssue(issueID: issueID) { result in
            completion(result)
        }
    }
    
    func close(indexPath: IndexPath, completion: @escaping (Bool) -> Void) {
        let issueIDs: [Int] = [issueList.issues[indexPath.row].id]
        issueListUseCase.executeCloseIssue(issueIDs: issueIDs) { result in
            completion(result)
        }
    }
}
