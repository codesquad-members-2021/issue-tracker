import Foundation
import Combine

protocol IssuesUseCase {
    func requestIssues(url: URL?, session: URLSession) -> AnyPublisher<IssueList, NetworkError>
}

struct IssueRepository: IssuesUseCase {
    func requestIssues(url: URL?, session: URLSession) -> AnyPublisher<IssueList, NetworkError> {
        guard let url = url else {
            return Fail(error: NetworkError.invalidURL).eraseToAnyPublisher()
        }
        return session.dataTaskPublisher(for: URLRequest(url: url))
    }
}
