//
//  RequestManager.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import Foundation
import Alamofire

final class RequestManager {
    
    private var url: String
    private var headers: HTTPHeaders?
    private let successCodeRange = 200..<300
    
    init(url: String, headers: [String: String]? = nil) {
        self.url = url
        self.headers = HTTPHeaders(headers ?? [:])
    }
    
    func create(method: HTTPMethod, queryParameters: [String: Any]?) -> DataRequest {
        return AF.request(self.url,
                          method: method,
                          parameters: queryParameters,
                          encoding: URLEncoding.queryString,
                          headers: self.headers)
            .validate(statusCode: successCodeRange)
    }
    
    func create<T: Encodable>(method: HTTPMethod, encodableParameters: T) -> DataRequest {
        return AF.request(self.url,
                          method: method,
                          parameters: encodableParameters,
                          encoder: JSONParameterEncoder(),
                          headers: self.headers)
            .validate(statusCode: successCodeRange)
    }
}
