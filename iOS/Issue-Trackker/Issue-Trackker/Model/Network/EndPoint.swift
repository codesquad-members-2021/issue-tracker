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
    var decodingStrategy: JSONDecoder.KeyDecodingStrategy { get }
    func url() -> URL?
}

class MainEndPoint: Requestable {
    
    var baseURL: String = ""
    var path: String
    var httpMethod: HTTPMethod
    var decodingStrategy: JSONDecoder.KeyDecodingStrategy
    
    init(path: String, httpMethod: HTTPMethod, decodingStrategy: JSONDecoder.KeyDecodingStrategy) {
        self.path = path
        self.httpMethod = httpMethod
        self.decodingStrategy = decodingStrategy
    }
    
    func url() -> URL? {
        return URL(string: baseURL + path)
    }
}

class LocalEndPoint: Requestable {
    
    var baseURL: String = ""
    var path: String
    var httpMethod: HTTPMethod
    var decodingStrategy: JSONDecoder.KeyDecodingStrategy
    
    init(path: String, httpMethod: HTTPMethod, decodingStrategy: JSONDecoder.KeyDecodingStrategy) {
        self.path = path
        self.httpMethod = httpMethod
        self.decodingStrategy = decodingStrategy
    }
    
    func url() -> URL? {
        URL(fileURLWithPath: baseURL + path)
    }
}
