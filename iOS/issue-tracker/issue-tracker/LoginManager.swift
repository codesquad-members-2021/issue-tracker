import Foundation
import Combine

class LoginManager {
    
    func requestGitHubAuthorization() -> (URL, String) {
        let redirectURI = "issueTracker://login"
        let callbackUrlScheme = "issueTracker"
        let url = URL(string: "https://github.com/login/oauth/authorize?client_id=04fb3475fc652d5304a3&redirect_uri=\(redirectURI)")!
        
        return (url, callbackUrlScheme)
    }
    
    func extractAuthorizationCode(from url: URL) -> String {
        guard let code = url.absoluteString.components(separatedBy: "=").last else {
            return ""
        }
        return code
    }
    
    func convertToURL(with code: String) -> URL? {
        let loginURLString = "http://13.125.35.62/api/login/github/ios?code=\(code)"
        return URL(string: loginURLString)
    }
    
    func get<T>(with url: URL?, type: T.Type) -> AnyPublisher<T, NetworkError> where T: Decodable {
        guard let url = url else {
            let error = NetworkError.url(description: "The URL is not appropriate")
            return Fail(error: error).eraseToAnyPublisher()
        }
        
        return URLSession.shared.dataTaskPublisher(for: url)
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
