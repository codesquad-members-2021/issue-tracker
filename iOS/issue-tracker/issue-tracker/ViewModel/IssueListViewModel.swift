import Foundation
import Combine

class IssueListViewModel {
    
    @Published private var issueList: IssueList
    private var filteredIssueList: IssueList
    private let issueListUseCase: IssueListUseCase
    private var subscriptions: Set<AnyCancellable>

    init() {
        self.issueList = IssueList(issues: [])
        self.filteredIssueList = IssueList(issues: [])
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
    
    func didUpdateIssueList() -> AnyPublisher<IssueList, Never> {
        return $issueList
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func getIssueCount(isFiltering: Bool) -> Int {
        return isFiltering ? filteredIssueList.issues.count : issueList.issues.count
    }
    
    func getIssue(indexPath: IndexPath, isFiltering: Bool) -> Issue {
        return isFiltering ? filteredIssueList.issues[indexPath.row] : issueList.issues[indexPath.row]
    }
    
    func getFilteredIssue(indexPath: IndexPath) -> Issue {
        return filteredIssueList.issues[indexPath.row]
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
    
    func filterIssueList(with title: String) {
        self.filteredIssueList.issues = self.issueList.issues.filter({ $0.title.localizedCaseInsensitiveContains(title) })
    }
    
}
