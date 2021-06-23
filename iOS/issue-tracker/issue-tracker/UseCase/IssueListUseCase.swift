import Foundation
import Combine

class IssueListUseCase {
    
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
    
    func executeDeleteIssue(issueID: Int, completion: @escaping (Bool) -> Void) {
        let path = "/\(issueID)"
        let url = endPoint.makeURL(with: path)
        networkManager.sendRequest(with: url, method: .delete, type: ResponseBodyDTO.self)
            .sink { result in
                switch result {
                case .failure(let error):
                    print(error.localizedDescription)
                    completion(false)
                case .finished:
                    break
                }
            } receiveValue: { response in
                if let error = response.error {
                    print(error)
                    completion(false)
                } else {
                    completion(true)
                }
            }.store(in: &subscriptions)
    }
}
