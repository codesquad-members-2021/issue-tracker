import Foundation

struct EndPoint {
    
    private let scheme = "http"
    private let host = "13.125.35.62"
    private let userPath = "/api/user"
    
    func makeUserInfoURL() -> URL? {
        var component = URLComponents()
        component.scheme = scheme
        component.host = host
        component.path = userPath
        return component.url
    }
    
}
