//
//  AccessTokenRequest.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import Foundation

class AccessTokenRequest {
    let state: String
    let authorizationCode: String
    let session = URLSession(configuration: .ephemeral, delegate: nil, delegateQueue: .main)
    var task: URLSessionDataTask?
    
    init(authorizationCode: String, state: String) {
        self.authorizationCode = authorizationCode
        self.state = state
    }
}

// MARK: NetworkRequest
extension AccessTokenRequest: JSONDataRequest {
    typealias ModelType = Authorization
    
    var urlRequest: URLRequest {
        var request = URLRequest(url: GitHubEndpoint.accessTokenURL)
        request.httpMethod = "POST"
        request.addValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")
        request.addValue("application/json", forHTTPHeaderField: "Accept")
        let parameters = "grant_type=authorization_code"
            + "&\(GitHubEndpoint.FieldNames.clientID)=\(GitHubEndpoint.clientID)"
            + "&\(GitHubEndpoint.FieldNames.clientSecret)=\(GitHubEndpoint.clientSecret)"
            + "&\(GitHubEndpoint.FieldNames.authorizationCode)=\(authorizationCode)"
            + "&\(GitHubEndpoint.FieldNames.state)=\(state)"
        request.httpBody = parameters.data(using: .utf8)
        return request
    }
}

// MARK: - AuthorizationResponse
struct Authorization: Decodable{
    enum CodingKeys: String, CodingKey {
        case accessToken = "access_token"
    }
    
    let accessToken: String
}
