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
    var url: URL? { get }
    var decodingStrategy: JSONDecoder.KeyDecodingStrategy { get }
}

struct APIEndPoint: Requestable {
    
    let baseURL = "ec2-52-79-56-138.ap-northeast-2.compute.amazonaws.com"
    let path: String
    let httpMethod: HTTPMethod
    let decodingStrategy: JSONDecoder.KeyDecodingStrategy
    
    var url: URL? {
        return URL(string: baseURL + path)
    }
    
    init(path: String, httpMethod: HTTPMethod, decodingStrategy: JSONDecoder.KeyDecodingStrategy) {
        self.path = path
        self.httpMethod = httpMethod
        self.decodingStrategy = decodingStrategy
    }
}
