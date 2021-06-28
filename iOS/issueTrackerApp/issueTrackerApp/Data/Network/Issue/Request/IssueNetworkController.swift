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
        let requestURL = req.fetchReq.url!
        requests[requestURL] = req
        
        req.execute { (result) in
            if let _ = result {
                self.requests[requestURL] = nil
                completion(result!)
            }
        }
    }
    
    func deleteIssue(with issueId: Int, completion: @escaping (Status) -> Void) {
        let req = IssuePatchRequest()
        var requestURL = req.fetchReq.url!
        requestURL.appendPathComponent(String(issueId), isDirectory: false)
        requests[requestURL] = req
        
        req.execute { (status) in
            if let _ = status {
                self.requests[requestURL] = nil
                completion(status!)
            }
        }
    }
}
