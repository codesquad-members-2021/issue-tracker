//
//  RequestManager.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import Foundation
import Alamofire

final class RequestManager {
    
    private var baseAddress: String
    private var headers: HTTPHeaders?
    private let successCodeRange = 200..<300
    
    init(baseAddress: String, headers: [String: String]? = nil) {
        self.baseAddress = baseAddress
        self.headers = HTTPHeaders(headers ?? [:])
    }
    
    func create(endpoint: String = "", method: HTTPMethod, queryParameters: [String: Any]?) -> DataRequest {
        return AF.request(self.baseAddress + endpoint,
                          method: method,
                          parameters: queryParameters,
                          encoding: URLEncoding.queryString,
                          headers: self.headers)
            .validate(statusCode: successCodeRange)
    }
    
    func create<T: Encodable>(endpoint: String = "", method: HTTPMethod, encodableParameters: T) -> DataRequest {
        return AF.request(self.baseAddress + endpoint,
                          method: method,
                          parameters: encodableParameters,
                          encoder: JSONParameterEncoder(),
                          headers: self.headers)
            .validate(statusCode: successCodeRange)
    }
}
