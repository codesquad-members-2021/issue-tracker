import Foundation

enum Scheme: String {
    case http = "http"
}

enum Host: String {
    case base = "52.78.93.9"
}

enum Path: String {
    case api = "/api"
    case user = "/user"
    case issues = "/issues"
    case close = "/close"
    case label = "/labels"
    case milestone = "/milestones"
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
    
    func makeURL(with path: String = "") -> URL? {
        var component = URLComponents()
        component.scheme = scheme
        component.host = host
        component.path = self.path + path
        return component.url
    }
    
}
