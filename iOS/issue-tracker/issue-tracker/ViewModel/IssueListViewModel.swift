import Foundation
import Combine

class IssueListViewModel {
    
    @Published private var issueList: IssueList
    @Published private var errorMessage: NetworkError?
    @Published private var resultMessage: String?
    private var filteredIssueList: IssueList
    private let defaultIssueListUseCase: IssueListUseCase

    init(issueListUseCase: IssueListUseCase) {
        self.issueList = IssueList(issues: [])
        self.errorMessage = nil
        self.resultMessage = nil
        self.filteredIssueList = IssueList(issues: [])
        self.defaultIssueListUseCase = issueListUseCase
    }
    
    func fetchIssueList() {
        defaultIssueListUseCase.executeFetchingIssueList { result in
            switch result {
            case .failure(let error):
                self.errorMessage = error
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
    
    func didUpdateErrorMessage() -> AnyPublisher<NetworkError?, Never> {
        return $errorMessage
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func didUpdateResultMessage() -> AnyPublisher<String?, Never> {
        return $resultMessage
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
    
    func delete(indexPath: IndexPath) {
        let issueID = issueList.issues[indexPath.row].id
        defaultIssueListUseCase.executeDeleteIssue(issueID: issueID) { result in
            switch result {
            case .failure(let errorMessage):
                self.errorMessage = errorMessage
            case .success(let resultMessage):
                self.resultMessage = resultMessage
            }
        }
    }
    
    func close(indexPath: IndexPath) {
        let issueIDs: [Int] = [issueList.issues[indexPath.row].id]
        defaultIssueListUseCase.executeCloseIssue(issueIDs: issueIDs) { result in
            switch result {
            case .failure(let errorMessage):
                self.errorMessage = errorMessage
            case .success(let resultMessage):
                self.resultMessage = resultMessage
            }
        }
    }
    
    func filterIssueList(with title: String) {
        self.filteredIssueList.issues = self.issueList.issues.filter({ $0.title.localizedCaseInsensitiveContains(title) })
    }
    
}
