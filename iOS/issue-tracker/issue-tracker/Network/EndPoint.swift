import Foundation

struct EndPoint {
    
    private let scheme = "http"
    private let host = "13.125.35.62"
    private let apiPath = "/api"
    private let userPath = "/user"
    
    func makeUserInfoURL() -> URL? {
        var component = URLComponents()
        component.scheme = scheme
        component.host = host
        component.path = apiPath + userPath
        return component.url
    }
    
}
