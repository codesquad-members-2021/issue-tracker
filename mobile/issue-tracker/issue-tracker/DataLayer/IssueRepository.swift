import Foundation
import Combine

protocol IssuesUseCase {
    func requestIssues(url: URL?, session: URLSession) -> AnyPublisher<Issues, NetworkError>
}

struct IssueRepository: IssuesUseCase {
    func requestIssues(url: URL?, session: URLSession) -> AnyPublisher<Issues, NetworkError> {
        guard let url = url else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return session.dataTaskPublisher(for: URLRequest(url: url))
    }
}
