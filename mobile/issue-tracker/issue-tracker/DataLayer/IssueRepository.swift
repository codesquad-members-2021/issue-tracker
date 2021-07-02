import Foundation
import Combine

struct IssueRepository {

    func requestIssues() -> AnyPublisher<[Issues], NetworkError> {
        guard let url = EndPoint().url(router: .issues) else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return URLSession.shared.dataTaskPublisher(for: URLRequest(url: url))
    }
}
