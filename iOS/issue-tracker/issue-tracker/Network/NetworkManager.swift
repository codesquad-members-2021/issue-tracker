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
            let error = NetworkError.url
            return Fail(error: error).eraseToAnyPublisher()
        }
        
        let urlRequest = requestManager.makeRequest(url: url, method: method)
        return session.dataTaskPublisher(for: urlRequest)
            .mapError { _  in
                NetworkError.networkConnection
            }
            .flatMap { data, _ -> AnyPublisher<T, NetworkError> in
                let decodeData = Just(data)
                    .decode(type: type.self, decoder: JSONDecoder())
                    .mapError { _ in NetworkError.decoding }
                    .eraseToAnyPublisher()
                return decodeData
            }
            .eraseToAnyPublisher()
    }
    
    func sendRequest<T: Decodable, D: Encodable>(with url: URL?, method: HttpMethod, type: T.Type, body: D) -> AnyPublisher<T, NetworkError> {
        guard let url = url else {
            let error = NetworkError.url
            return Fail(error: error).eraseToAnyPublisher()
        }
        
        return Just(body).encode(encoder: JSONEncoder())
            .mapError { _ in
                return .encoding
            }
            .map { data -> URLRequest in
                let urlRequest = requestManager.makeRequest(url: url, method: method, body: data)
                return urlRequest
            }
            .flatMap { urlRequest in
                session.dataTaskPublisher(for: urlRequest)
                    .mapError { _ in NetworkError.networkConnection
                    }
                    .flatMap { data, _ -> AnyPublisher<T, NetworkError> in
                        let decodeData = Just(data)
                            .decode(type: type.self, decoder: JSONDecoder())
                            .mapError { _ in NetworkError.decoding }
                            .eraseToAnyPublisher()
                        return decodeData
                    }
                    .eraseToAnyPublisher()
            }
            .eraseToAnyPublisher()
    }
    
}

enum NetworkError: String, Error {

    case encoding = "Encoding Error"
    case decoding = "Decoding Error"
    case url = "URL does not exist"
    case networkConnection = "Network Error"
    
}
