import Foundation

enum ViewControllerID {
    static let issueFilter = "FilterVC"
    static let tabBar = "TabBarVC"
    static let redirection = "RedirectionVC"
}

enum API {
    static let getOpenIssue = URL(string: "http://3.37.76.224/api/issues?status=open%27")
    static let githubLogin = URL(string: "https://github.com/login/oauth/authorize?client_id=65a58e22f27700054cb6&scope=user&redirect_uri=IssueTracker://tracker")
    static let accessToken = "http://3.37.76.224/api/login?code="
}
