import Foundation
import Combine

class FetchIssueListUseCase {
    
    private let endPoint: EndPoint
    private let networkManager: NetworkManager
    private var subscriptions: Set<AnyCancellable>

    init() {
        self.endPoint = EndPoint(scheme: Scheme.http.rawValue, host: Host.base.rawValue, path: Path.api.rawValue + Path.issues.rawValue)
        self.networkManager = NetworkManager(jwtManager: JWTManager(), session: URLSession.shared)
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func executeFetchingIssueList(completion: @escaping (Result<IssueList, NetworkError>) -> Void) {
        let url = endPoint.makeURL()
        networkManager.get(with: url, type: IssueListResponseDTO.self)
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
}
