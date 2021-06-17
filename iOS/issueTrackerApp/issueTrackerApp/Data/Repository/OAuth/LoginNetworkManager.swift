//
//  LoginNetworkManager.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import Foundation

class LoginNetworkManager {
    private let keychainManager: KeychainManager
    private var requests: [URL: AnyObject] = [:]
    
    init(keychainManager: KeychainManager) {
        self.keychainManager = keychainManager
    }
    
    var jWT: String? {
        return keychainManager.readJWT()
    }
    
    var isClientAuthenticated: Bool {
        return jWT != nil
    }
    
    func authenticateWith(authorizationCode: String, client: String, completion: @escaping () -> Void) {
        let jWTRequest = JWTRequest(authorizationCode: authorizationCode, client: client)
        let requestURL = jWTRequest.fetchReq.url!
        requests[requestURL] = jWTRequest
        
        jWTRequest.execute { (authorization) in
            if let jWT = authorization?.jwt {
                self.keychainManager.store(jWT: jWT)
            }
            self.requests[requestURL] = nil
            self.fetchUserAvatarImage()//test
            completion()
        }
    }
    
    func logOut() {
        keychainManager.deleteJWT()
    }
    
    func fetchUserAvatarImage() {
        keychainManager.storeAvatarImage(jWT: self.jWT ?? "")
    }
}
