import Foundation
import Combine

struct NetworkManager {
    
    private let session: URLSessionProtocol
    private let requestManager: RequestManager
    
    init(requestManager: RequestManager, session: URLSessionProtocol) {
        self.requestManager = requestManager
        self.session = session
    }
    
    func sendRequest<T>(with url: URL?, method: HttpMethod, type: T.Type) -> AnyPublisher<T, NetworkError> where T: Decodable {
        guard let url = url else {
            let error = NetworkError.url(description: "The URL is not appropriate")
            return Fail(error: error).eraseToAnyPublisher()
        }
        
        let urlRequest = requestManager.makeRequest(url: url, method: method)
        return session.dataTaskPublisher(for: urlRequest)
            .mapError { _ in NetworkError.networkConnection(desciption: "Network Error")
            }
            .flatMap { data, response -> AnyPublisher<T, NetworkError> in
                guard let httpResponse = response as? HTTPURLResponse else {
                    return Fail(error: NetworkError.networkConnection(desciption: "Response Error")).eraseToAnyPublisher()
                }
                guard 200..<300 ~= httpResponse.statusCode else {
                    return Fail(error: NetworkError.networkConnection(desciption: "Status Error")).eraseToAnyPublisher()
                }
                let decodeData = Just(data)
                    .decode(type: type.self, decoder: JSONDecoder())
                    .mapError { _ in NetworkError.decoding(description: "Decode Error") }
                    .eraseToAnyPublisher()
                return decodeData
            }
            .eraseToAnyPublisher()
    }
    
    func sendRequest<T>(with url: URL, method: HttpMethod, type: T.Type, body: T) -> AnyPublisher<T, NetworkError> where T: Codable {
        
        return Just(body).encode(encoder: JSONEncoder())
            .mapError { _ in
                return .encoding(description: "Encode Error")
            }
            .map { data -> URLRequest in
                let urlRequest = requestManager.makeRequest(url: url, method: method, body: data)
                return urlRequest
            }
            .flatMap { urlRequest in
                session.dataTaskPublisher(for: urlRequest)
                    .mapError { _ in NetworkError.networkConnection(desciption: "Network Error")
                    }
                    .flatMap { data, response -> AnyPublisher<T, NetworkError> in
                        guard let httpResponse = response as? HTTPURLResponse else {
                            return Fail(error: NetworkError.networkConnection(desciption: "Response Error")).eraseToAnyPublisher()
                        }
                        guard 200..<300 ~= httpResponse.statusCode else {
                            return Fail(error: NetworkError.networkConnection(desciption: "Status Error")).eraseToAnyPublisher()
                        }
                        let decodeData = Just(data)
                            .decode(type: type.self, decoder: JSONDecoder())
                            .mapError { _ in NetworkError.decoding(description: "Decode Error") }
                            .eraseToAnyPublisher()
                        return decodeData
                    }
                    .eraseToAnyPublisher()
            }
            .eraseToAnyPublisher()
    }
}

enum NetworkError: Error {
    
    case encoding(description: String)
    case decoding(description: String)
    case url(description: String)
    case networkConnection(desciption: String)
    
}
