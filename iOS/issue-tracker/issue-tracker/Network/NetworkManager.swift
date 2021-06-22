import Foundation
import Combine

protocol URLSessionProtocol {
    func dataTaskPublisher(for request: URLRequest) -> URLSession.DataTaskPublisher
}

extension URLSession: URLSessionProtocol { }

struct NetworkManager {
    
    private let jwtManager: JWTManageable
    private let session: URLSessionProtocol
    
    init(jwtManager: JWTManageable, session: URLSessionProtocol) {
        self.jwtManager = jwtManager
        self.session = session
    }
    
    func makeAuthorizationRequest(url: URL) -> URLRequest {
        guard let jwt = jwtManager.get() else {
            return URLRequest(url: url)
        }
        
        var request = URLRequest(url: url)
        let requestValue = "Bearer " + jwt
        let headerField = "Authorization"
        
        request.setValue(requestValue, forHTTPHeaderField: headerField)
        return request
    }
    
    func get<T>(with url: URL?, type: T.Type) -> AnyPublisher<T, NetworkError> where T: Decodable {
        guard let url = url else {
            let error = NetworkError.url(description: "The URL is not appropriate")
            return Fail(error: error).eraseToAnyPublisher()
        }
        
        return session.dataTaskPublisher(for: self.makeAuthorizationRequest(url: url))
            .mapError { _ in NetworkError.networkConnection(desciption: "Network Error") }
            .flatMap { data, response -> AnyPublisher<T, NetworkError> in
                guard let httpResponse = response as? HTTPURLResponse else {
                    return Fail(error: NetworkError.networkConnection(desciption: "Response Error")).eraseToAnyPublisher()
                }
                guard 200..<300 ~= httpResponse.statusCode else {
                    return Fail(error: NetworkError.networkConnection(desciption: "Status Error")).eraseToAnyPublisher()
                }
                let decodeData = Just(data)
                    .decode(type: type.self, decoder: JSONDecoder())
                    .mapError { _ in NetworkError.decoding(description: "Decode Error")}.eraseToAnyPublisher()
                return decodeData
            }.eraseToAnyPublisher()
    }
    
}

enum NetworkError: Error {
    
    case encoding(description: String)
    case decoding(description: String)
    case url(description: String)
    case networkConnection(desciption: String)
    
}
