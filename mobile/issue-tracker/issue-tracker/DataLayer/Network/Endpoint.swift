//
//  Endpoint.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation

enum PathRouter: String {
    case auth
    case issues
}

enum Endpoint {

    private static let scheme = "http"
    private static let host = "localhost"
    private static let port = 8080
    private static let basePath = "/api/ios/"
    private static let headers = ["Content-Type": "application/json"]

    static func url(router: PathRouter) -> URL? {
        var component = URLComponents()
        component.scheme = Endpoint.scheme
        component.host = Endpoint.host
        component.port = Endpoint.port
        component.path = Endpoint.basePath + router.rawValue
        return component.url
    }

    static func authURLRequest(to code: Encodable) -> URLRequest? {
        guard let url = Endpoint.url(router: .auth) else {
            return nil
        }
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = Method.status(.post)
        urlRequest.httpBody = code.encode()
        urlRequest.allHTTPHeaderFields = headers
        return urlRequest
    }
}
