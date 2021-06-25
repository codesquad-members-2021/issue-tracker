//
//  Endpoint.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/08.
//

import Foundation

struct Endpoint {
    let scheme: String = "http"
    let host: String = "3.37.161.3"
    let port: Int = 8080
    var path: Path

    func url(queryItems: [URLQueryItem] = [], id: Int? = nil) -> URL? {
        var urlComponents = URLComponents()
        urlComponents.scheme = scheme
        urlComponents.host = host
        urlComponents.port = port
        urlComponents.path = path.pathString
        if let id = id {
            urlComponents.path = path.pathString + "/" + String(id)
        }
        urlComponents.queryItems = queryItems
        return urlComponents.url
    }

    enum Path: String {
        case login = "/api/user/login/oauth/githubios"
        case label = "/api/label"
        case issue = "/api/issue"
        case milestone = "/api/milestone"
        case user = "/api/user"

        var pathString: String {
            return self.rawValue
        }
    }
}
