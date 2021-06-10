//
//  NetworkController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import Foundation

class NetworkController {
    private let keychainController: KeychainController
    private var requests: [URL: AnyObject] = [:]
    
    init(keychainController: KeychainController) {
        self.keychainController = keychainController
    }
    
    var accessToken: String? {
        return keychainController.readAccessToken()
    }
    
    var isClientAuthenticated: Bool {
        return accessToken != nil
    }
    
    func authenticateWith(authorizationCode: String, state: String, completion: @escaping () -> Void) {
        let accessTokenRequest = AccessTokenRequest(authorizationCode: authorizationCode, state: state)
        let requestURL = accessTokenRequest.urlRequest.url!
        requests[requestURL] = accessTokenRequest
        accessTokenRequest.execute { (authorization) in
            if let accessToken = authorization?.accessToken {
                self.keychainController.store(accessToken: accessToken)
            }
            self.requests[requestURL] = nil
            completion()
        }
    }
}
