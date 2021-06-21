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
    
}
