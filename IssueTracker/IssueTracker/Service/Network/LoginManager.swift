import Foundation

class LoginManager {
    
    static func loginPost(_ url: URL?) {
        guard let url = url else { return }
        UIApplication.shared.open(url)
    }
    
    static func requestAccessToken(_ code:String) {
        guard let url = URL(string: API.accessToken+code) else { return }
        let headers: HTTPHeaders = ["User-Agent":"IssueTrackerIOS/1.0"]
        AF.request(url, method: .post, headers: headers)
    }
    
}
