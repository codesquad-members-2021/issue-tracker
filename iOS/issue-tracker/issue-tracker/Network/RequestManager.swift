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
    private var parameters: [String: Any]?
    private var headers: HTTPHeaders?
    
    init(url: String, parameters: [String: Any]? = nil, headers: [String: String]? = nil) {
        self.url = url
        self.parameters = parameters
        self.headers = HTTPHeaders(headers ?? [:])
    }
    
    func create(method: HTTPMethod, parameters: [String: Any]? = nil) -> DataRequest {
        let params = parameters != nil ? parameters : self.parameters
    
        return AF.request(self.url,
                          method: method,
                          parameters: params,
                          headers: self.headers)
    }
    
    func create<T: Encodable>(method: HTTPMethod, encodableParameters: T) -> DataRequest {
        return AF.request(self.url,
                          method: method,
                          parameters: encodableParameters,
                          encoder: JSONParameterEncoder(),
                          headers: self.headers)
    }
    
}
