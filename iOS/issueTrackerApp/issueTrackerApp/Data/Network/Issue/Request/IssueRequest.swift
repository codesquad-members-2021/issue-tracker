//
//  IssueNetworkRequest.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/11.
//

import Foundation

class IssueRequest {
    let session = URLSession(configuration: .ephemeral, delegate: nil, delegateQueue: .main)
    var task: URLSessionDataTask?
    
    init() {
    }
}

extension IssueRequest: JSONDataRequest {
    typealias ModelType = [Issue]
    
    var fetchReq: URLRequest {
        let urlComponents = URLComponents(url: IssueEndPoint.url(), resolvingAgainstBaseURL: false)!
        let request = try! URLRequest(url: urlComponents, method: .get)
        return request
    }
    
}
