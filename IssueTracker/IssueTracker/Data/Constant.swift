import Foundation

enum ViewControllerID {
    static let issueFilter = "FilterVC"
    static let tabBar = "TabBarVC"
}

enum API {
    static let getOpenIssue = URL(string: "http://3.37.76.224/api/issues?status=open%27")
}
