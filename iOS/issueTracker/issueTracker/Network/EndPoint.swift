//
//  EndPoint.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/14.
//

import Foundation
import Alamofire

protocol Requestable {
    var baseURL: String { get }
    var path: String { get }
    var httpMethod: HTTPMethod { get }
    func url() -> URL?
}

struct APIEndPoint: Requestable {
    var baseURL = "ec2-52-79-56-138.ap-northeast-2.compute.amazonaws.com"
    var path: String
    var httpMethod: HTTPMethod
    
    init(path: String, httpMethod: HTTPMethod) {
        self.path = path
        self.httpMethod = httpMethod
    }
    
    func url() -> URL? {
        return URL(string: baseURL + path)
    }
}
