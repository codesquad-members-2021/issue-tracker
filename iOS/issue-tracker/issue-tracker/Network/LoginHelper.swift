import Foundation
import Combine

class LoginHelper {
    
    private let callbackURLScheme = "issueTracker"
    private let gitHubLoginUrlString = "https://github.com/login/oauth/authorize?client_id=04fb3475fc652d5304a3"
    
    func getCallbackURLscheme() -> String {
        return callbackURLScheme
    }
    
    func getGitHubLoginURL() -> URL? {
        return URL(string: gitHubLoginUrlString)
    }
    
    func extractedAuthorizationCode(from url: URL) -> String {
        guard let code = url.absoluteString.components(separatedBy: "=").last else {
            return ""
        }
        return code
    }
    
    func convertedToURL(with code: String) -> URL? {
        let loginURLString = "http://52.78.35.48/api/login/github/ios?code=\(code)"
        return URL(string: loginURLString)
    }
    
}
