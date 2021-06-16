//
//  EndPoint.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/13.
//

import Foundation
import Alamofire

protocol Requestable {
    var baseURL: String { get }
    var path: String { get }
    var httpMethod: HTTPMethod { get }
    func url() -> String
}

class MainEndPoint: Requestable {
    var baseURL: String = "https://naver.com"
    
    var path: String
    
    var httpMethod: HTTPMethod
    
    init(path: String, httpMethod: HTTPMethod) {
        self.path = path
        self.httpMethod = httpMethod
    }
    
    func url() -> String {
        return baseURL + path
    }
}
