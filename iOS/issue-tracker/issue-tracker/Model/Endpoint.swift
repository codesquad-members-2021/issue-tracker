//
//  Endpoint.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/08.
//

import Foundation

struct Endpoint {
    let scheme: String = "https"
    let host: String = "77b8f295-a324-4645-9ff3-3d93eaf7b630.mock.pstmn.io"
    let port: Int = 8080
    var path: Path

    func url(queryItems: [URLQueryItem] = []) -> URL? {
        var urlComponents = URLComponents()
        urlComponents.scheme = scheme
        urlComponents.host = host
        urlComponents.path = path.pathString
        urlComponents.queryItems = queryItems
        return urlComponents.url
    }

    enum Path: String {
        case login = "/login"
        case label = "/label"

        var pathString: String {
            return self.rawValue
        }
    }
}
