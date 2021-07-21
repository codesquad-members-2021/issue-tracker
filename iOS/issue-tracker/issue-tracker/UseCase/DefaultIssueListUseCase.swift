import Foundation
import Combine

protocol IssueListUseCase {
    
    func executeFetchingIssueList(completion: @escaping (Result<IssueList, NetworkError>) -> Void)
    func executeDeleteIssue(issueID: Int, completion: @escaping (Result<String, NetworkError>) -> Void)
    func executeCloseIssue(issueIDs: [Int], completion: @escaping (Result<String, NetworkError>) -> Void)
    
}

class DefaultIssueListUseCase: IssueListUseCase {
    
    private let endPoint: EndPoint
    private let networkManager: NetworkManager
    private var subscriptions: Set<AnyCancellable>

    init() {
        self.endPoint = EndPoint(scheme: Scheme.http.rawValue, host: Host.base.rawValue, path: Path.api.rawValue + Path.issues.rawValue)
        self.networkManager = NetworkManager(requestManager: RequestManager(jwtManager: JWTManager()), session: URLSession.shared)
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func executeFetchingIssueList(completion: @escaping (Result<IssueList, NetworkError>) -> Void) {
        let url = endPoint.makeURL()
        networkManager.sendRequest(with: url, method: .get, type: IssueListResponseDTO.self)
            .sink { result in
                switch result {
                case .failure(let error):
                    completion(.failure(error))
                case .finished:
                    break
                }
            } receiveValue: { issueListResponseDTO in
                completion(.success(issueListResponseDTO.toDomain()))
            }.store(in: &subscriptions)
    }
    
    func executeDeleteIssue(issueID: Int, completion: @escaping (Result<String, NetworkError>) -> Void) {
        let path = "/\(issueID)"
        let url = endPoint.makeURL(with: path)
        networkManager.sendRequest(with: url, method: .delete, type: ResponseBodyDTO.self)
            .sink { result in
                switch result {
                case .failure(let error):
                    completion(.failure(error))
                case .finished:
                    break
                }
            } receiveValue: { response in
                if let error = response.error {
                    completion(.success(error))
                } else {
                    if let data = response.data {
                        completion(.success(data))
                    }
                }
            }.store(in: &subscriptions)
    }
    
    func executeCloseIssue(issueIDs: [Int], completion: @escaping (Result<String, NetworkError>) -> Void) {
        let path = "/close"
        let url = endPoint.makeURL(with: path)
        networkManager.sendRequest(with: url, method: .post, type: ResponseBodyDTO.self, body: IssueIDsDTO(issueIds: issueIDs))
            .sink { result in
                switch result {
                case .failure(let error):
                    completion(.failure(error))
                case .finished:
                    break
                }
            } receiveValue: { response in
                if let error = response.error {
                    completion(.success(error))
                } else {
                    if let data = response.data {
                        completion(.success(data))
                    }
                }
            }.store(in: &subscriptions)
    }
    
}
