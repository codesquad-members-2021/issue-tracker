import Foundation

class RequestManager {
    
    private let jwtManager: JWTManageable

    init(jwtManager: JWTManageable) {
        self.jwtManager = jwtManager
    }
    
    private func makeAuthorizationRequest(url: URL) -> URLRequest {
        guard let jwt = jwtManager.get() else {
            return URLRequest(url: url)
        }
        
        var request = URLRequest(url: url)
        let requestValue = "Bearer " + jwt
        let headerField = "Authorization"
        
        request.setValue(requestValue, forHTTPHeaderField: headerField)
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        return request
    }
    
    func makeRequest(url: URL, method: HttpMethod, body: Data? = nil) -> URLRequest {
        var urlRequest = self.makeAuthorizationRequest(url: url)
        urlRequest.httpMethod = method.rawValue
        urlRequest.httpBody = body
        return urlRequest
    }
    
}

enum HttpMethod: String {
    
    case get = "GET"
    case post = "POST"
    case delete = "DELETE"
    case put = "PUT"
    case patch = "PATCH"
    
}
