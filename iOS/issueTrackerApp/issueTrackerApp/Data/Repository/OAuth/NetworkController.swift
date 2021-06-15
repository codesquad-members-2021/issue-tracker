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
        return keychainController.readJWT()
    }
    
    var isClientAuthenticated: Bool {
        return accessToken != nil
    }
    
    func authenticateWith(authorizationCode: String, client: String, completion: @escaping () -> Void) {
        let jWTRequest = JWTRequest(authorizationCode: authorizationCode, client: client)
        let requestURL = jWTRequest.fetchReq.url!
        requests[requestURL] = jWTRequest
        
        jWTRequest.execute { (authorization) in
            if let jWT = authorization?.jwt {
                self.keychainController.store(jWT: jWT)
            }
            self.requests[requestURL] = nil
            completion()
        }
    }
    
    func logOut() {
        keychainController.deleteJWT()
    }
}
