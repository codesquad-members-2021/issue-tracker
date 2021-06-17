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
        static let clientID = "client_id"
        static let clientSecret = "client_secret"
        static let redirectURI = "redirect_uri"
        static let authorizationCode = "code"
        static let client = "ios"
        static let page = "page"
        static let scope = "scope"
    }
    
    static let loginURL = "https://f88e009a-3e2b-4862-838e-1f2cde9b95ed.mock.pstmn.io/api/login/auth"
    static let clientID = "34a66f51f68864c9adfd"
    static let clientSecret = "8473cd9ac4bb16ef2156ed80b89646d09d4db01f"
    static let scope = "user"
    static let authorizationCallbackURLScheme = "issue-tracker"
    static let redirectURI = "issue-tracker://login"
    static let accessTokenURL = URL(string: "https://github.com/login/oauth/access_token")!
    static let serverURL = URL(string: "https://github.com")!
    static let authorizationURL = URL(string: "https://github.com/login/oauth/authorize")!
    static let signOutURL = URL(string: "https://github.com/logout")!
    static let apiRootURL = URL(string: "https://api.github.com")!
    
    static func authorizationUrl() -> URL {
        var urlComponents = URLComponents(url: GitHubEndpoint.authorizationURL, resolvingAgainstBaseURL: false)!
        urlComponents.queryItems = [
            URLQueryItem(name: FieldNames.clientID, value: GitHubEndpoint.clientID),
            URLQueryItem(name: FieldNames.redirectURI, value: GitHubEndpoint.redirectURI),
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
