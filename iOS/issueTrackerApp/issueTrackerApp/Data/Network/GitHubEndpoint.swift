//
//  GitHubEndpoint.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import Foundation

struct GitHubEndpoint {
    struct FieldNames {
        static let state = "state"
        static let clientID = "95b344e62e5f1112ab47"
        static let clientSecret = "dc838c3ec19ff9b748825c26a187045f7ad5cbda"
        static let authorizationCode = "code"
        static let page = "page"
        static let scope = "scope"
    }
    
    static let clientID = "95b344e62e5f1112ab47"
    static let clientSecret = "dc838c3ec19ff9b748825c26a187045f7ad5cbda"
    static let scope = "user"
    static let authorizationCallbackURLScheme = "issueTrackerApp://"
    static let accessTokenURL = URL(string: "https://github.com/login/oauth/access_token")!
    static let serverURL = URL(string: "https://github.com")!
    static let authorizationURL = URL(string: "https://github.com/login/oauth/authorize")!
    static let signOutURL = URL(string: "https://github.com/logout")!
        static let apiRootURL = URL(string: "https://api.github.com")!
    
    static func authorizationUrl(with state: String) -> URL {
        var urlComponents = URLComponents(url: GitHubEndpoint.authorizationURL, resolvingAgainstBaseURL: false)!
        urlComponents.queryItems = [
            URLQueryItem(name: FieldNames.clientID, value: GitHubEndpoint.clientID),
            URLQueryItem(name: FieldNames.state, value: state),
            URLQueryItem(name: FieldNames.scope, value: GitHubEndpoint.scope)
        ]
        return urlComponents.url!
    }
}

extension URL {
    var authorizationCode: String? {
        guard absoluteString.contains(GitHubEndpoint.authorizationCallbackURLScheme) else {
            return nil
        }
        guard let components = URLComponents(url: self, resolvingAgainstBaseURL: false),
            let queryItems = components.queryItems else {
                return nil
        }
        for queryItem in queryItems {
            if queryItem.name == GitHubEndpoint.FieldNames.authorizationCode {
                return queryItem.value
            }
        }
        return nil
    }
}
