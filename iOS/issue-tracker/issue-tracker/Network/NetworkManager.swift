import Foundation
import Combine

struct NetworkManager {
    
    private let session: URLSessionProtocol
    private let requestManager: RequestManager
    
    init(requestManager: RequestManager, session: URLSessionProtocol) {
        self.requestManager = requestManager
        self.session = session
    }
    
    func sendRequest<T: Decodable>(with url: URL?, method: HttpMethod, type: T.Type) -> AnyPublisher<T, NetworkError> {
        guard let url = url else {
            let error = NetworkError.url(description: "The URL is not appropriate")
            return Fail(error: error).eraseToAnyPublisher()
        }
        
        let urlRequest = requestManager.makeRequest(url: url, method: method)
        return session.dataTaskPublisher(for: urlRequest)
            .mapError { _ in NetworkError.networkConnection(desciption: "Network Error")
            }
            .flatMap { data, _ -> AnyPublisher<T, NetworkError> in
                let decodeData = Just(data)
                    .decode(type: type.self, decoder: JSONDecoder())
                    .mapError { _ in NetworkError.decoding(description: "Decode Error") }
                    .eraseToAnyPublisher()
                return decodeData
            }
            .eraseToAnyPublisher()
    }
    
    func sendRequest<T: Decodable, D: Encodable>(with url: URL?, method: HttpMethod, type: T.Type, body: D) -> AnyPublisher<T, NetworkError> {
        guard let url = url else {
            let error = NetworkError.url(description: "The URL is not appropriate")
            return Fail(error: error).eraseToAnyPublisher()
        }
        
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
                    .flatMap { data, _ -> AnyPublisher<T, NetworkError> in
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
