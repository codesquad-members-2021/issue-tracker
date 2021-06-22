import Foundation
import Combine

class FetchIssueListUseCase {
    
    private let endPoint: EndPoint
    private let networkManager: NetworkManager
    private var subscriptions: Set<AnyCancellable>
    private var issueList: IssueList

    init() {
        self.endPoint = EndPoint(scheme: Scheme.http.rawValue, host: Host.base.rawValue, path: Path.api.rawValue + Path.issues.rawValue)
        self.networkManager = NetworkManager(jwtManager: JWTManager(), session: URLSession.shared)
        self.subscriptions = Set<AnyCancellable>()
        self.issueList = IssueList(issues: [])
    }
    
    func executeFetchingIssueList(completion: @escaping (Result<String, NetworkError>) -> Void) {
        let url = endPoint.makeURL()
        networkManager.get(with: url, type: IssueListResponseDTO.self)
            .sink { result in
                switch result {
                case .failure(let error):
                    completion(.failure(error))
                case .finished:
                    break
                }
            } receiveValue: { userInfoResponDTO in
                guard let data = userInfoResponDTO.data else {
                    return
                }
                completion(.success(data.profileImage))
            }.store(in: &subscriptions)
    }
}
