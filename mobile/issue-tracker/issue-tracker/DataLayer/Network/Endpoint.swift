//
//  Endpoint.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation

enum Rounter: String {
    case auth
    case hello
}

enum Endpoint {

    static let scheme = "http"
    static let host = "localhost"
    static let port = 8080
    static let basePath = "/api/ios/"
    static let headers = ["application/json": "Content-Type"]

    private static func url(rount: Rounter) -> URL? {
        var component = URLComponents()
        component.scheme = Endpoint.scheme
        component.host = Endpoint.host
        component.port = Endpoint.port
        component.path = Endpoint.basePath + rount.rawValue
        return component.url
    }

    static func authURLRequest(to code: Encodable) -> URLRequest? {
        guard let url = Endpoint.url(rount: .auth) else {
            return nil
        }
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = Method.post.rawValue
        urlRequest.httpBody = code.encode()
        urlRequest.setValue(headers.keys.first ?? "",
                            forHTTPHeaderField: headers.values.first ?? "")
        return urlRequest
    }
}
