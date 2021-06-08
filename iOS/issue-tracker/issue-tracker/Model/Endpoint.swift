//
//  Endpoint.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/08.
//

import Foundation

struct Endpoint {
    static let scheme: String = "https"
    static let host: String = ""
    static let port: Int = 8080
    static let path: String = ""
    
    static func url(path: String, queryItems: [URLQueryItem] = []) -> URL? {
        var urlComponents = URLComponents()
        urlComponents.scheme = scheme
        urlComponents.host = host
        urlComponents.port = port
        urlComponents.path = path
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
