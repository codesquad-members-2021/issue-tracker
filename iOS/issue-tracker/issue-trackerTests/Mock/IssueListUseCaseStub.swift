import Foundation

class IssueListUseCaseStub: IssueListUseCase {
    
    var success: Bool
    var resultIssueList: IssueList
    var response: ResponseBodyDTO
    
    init(success: Bool, response: ResponseBodyDTO) {
        self.success = success
        self.resultIssueList = IssueList(issues: [Issue(id: 1, title: "title", comment: "comment", milestone: "milestone", labels: [])])
        self.response = response
    }
    
    func executeFetchingIssueList(completion: @escaping (Result<IssueList, NetworkError>) -> Void) {
        switch success {
        case true:
            completion(Result.success(self.resultIssueList))
        case false:
            completion(Result.failure(.networkConnection))
        }
    }
    
    func executeDeleteIssue(issueID: Int, completion: @escaping (Result<String, NetworkError>) -> Void) {
        switch success {
        case true:
            if let error = response.error {
                completion(.success(error))
            } else {
                if let data = response.data {
                    completion(.success(data))
                }
            }
        case false:
            completion(Result.failure(.networkConnection))
        }
    }
    
    func executeCloseIssue(issueIDs: [Int], completion: @escaping (Result<String, NetworkError>) -> Void) {
        switch success {
        case true:
            if let error = response.error {
                completion(.success(error))
            } else {
                if let data = response.data {
                    completion(.success(data))
                }
            }
        case false:
            completion(Result.failure(.networkConnection))
        }
    }
    
}
