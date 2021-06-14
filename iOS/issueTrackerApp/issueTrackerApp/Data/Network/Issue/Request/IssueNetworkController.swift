//
//  IssueNetworkController.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/13.
//

import Foundation

class IssueNetworkController {
    private var requests: [URL: AnyObject] = [:]
    
    init() {
    }
    
    func fetchIssues(completion: @escaping ([Issue]) -> Void) {
        let req = IssueRequest()
        let requestURL = req.urlRequest.url!
        requests[requestURL] = req
        
        req.execute { (result) in
            if let _ = result {
                self.requests[requestURL] = nil
                completion(result!)
            }
        }
    }
}
