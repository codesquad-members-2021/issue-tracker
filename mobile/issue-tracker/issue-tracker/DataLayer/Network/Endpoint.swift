//
//  Endpoint.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import Foundation

enum EndPoint {
    //https://github.com/login/oauth/authorize?client_id=02d3c6009c956f409399
    static let scheme = "http"
    static let host = "localhost:8080"
    static let basicPath = ""
    static let post = 8080
    
    static let scheme2 = "https"
    static let host2 = "localhost:8080"
    static let basicPath2 = ""
    static let post2 = 8080
    
    
    
    static func url() -> URL? {
        var componets = URLComponents()
        componets.scheme = EndPoint.scheme
        componets.host = EndPoint.host
        componets.port = EndPoint.post
        return componets.url
    }
}
