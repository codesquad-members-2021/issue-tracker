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
    
    func create(method: HTTPMethod) -> DataRequest {
        return AF.request(self.url,
                          method: method,
                          parameters: self.parameters,
                          headers: self.headers)
    }
    
}
