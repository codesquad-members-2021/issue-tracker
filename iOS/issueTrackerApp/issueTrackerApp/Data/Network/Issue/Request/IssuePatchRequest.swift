//
//  IssuePatchRequest.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/15.
//

import Foundation

class IssuePatchRequest {
    let session = URLSession(configuration: .ephemeral, delegate: nil, delegateQueue: .main)
    var task: URLSessionDataTask?
    
    init() {
    }
}

extension IssuePatchRequest: JSONDataRequest {
    typealias ModelType = Status
    
    var fetchReq: URLRequest {
        let urlComponents = URLComponents(url: IssueEndPoint.url(), resolvingAgainstBaseURL: false)!
        var request = try! URLRequest(url: urlComponents, method: .patch)
        let body = ["delete": true]
        let bodyData = try? JSONSerialization.data(
            withJSONObject: body,
            options: [])
        request.httpBody = bodyData
        return request
    }
    
}
