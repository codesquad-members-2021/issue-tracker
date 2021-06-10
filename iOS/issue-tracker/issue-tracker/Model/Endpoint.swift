//
//  Endpoint.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/08.
//

import Foundation

struct Endpoint {
    let scheme: String = "https"
    let host: String = ""
    let port: Int = 8080
    var path: Path

    func url(queryItems: [URLQueryItem] = []) -> URL? {
        var urlComponents = URLComponents()
        urlComponents.scheme = scheme
        urlComponents.host = host
        urlComponents.port = port
        urlComponents.path = path.pathString
        urlComponents.queryItems = queryItems
        return urlComponents.url
    }

    enum Path: String {
        case login = "/login"

        var pathString: String {
            return self.rawValue
        }
    }
}
