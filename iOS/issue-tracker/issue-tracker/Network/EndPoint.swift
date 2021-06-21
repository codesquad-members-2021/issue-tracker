import Foundation

enum Scheme: String {
    case http = "http"
}

enum Host: String {
    case base = "13.125.35.62"
}

enum Path: String {
    case api = "/api"
    case user = "/user"
}

struct EndPoint {

    private var scheme: String
    private var host: String
    private var path: String
    
    init(scheme: String, host: String, path: String) {
        self.scheme = scheme
        self.host = host
        self.path = path
    }
    
    func makeURL() -> URL? {
        var component = URLComponents()
        component.scheme = scheme
        component.host = host
        component.path = path
        return component.url
    }
    
}
