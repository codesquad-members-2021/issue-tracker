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
    
    var jWT: String? {
        return keychainController.readJWT()
    }
    
    var isClientAuthenticated: Bool {
        return jWT != nil
    }
    
    func authenticateWith(authorizationCode: String, client: String, completion: @escaping () -> Void) {
        let jWTRequest = JWTRequest(authorizationCode: authorizationCode, client: client)
        let requestURL = jWTRequest.urlRequest.url!
        requests[requestURL] = jWTRequest
        
        jWTRequest.execute { (authorization) in
            if let jWT = authorization?.jwt {
                self.keychainController.store(jWT: jWT)
            }
            self.requests[requestURL] = nil
            self.fetchUserAvatarImage()//test
            completion()
        }
    }
    
    func logOut() {
        keychainController.deleteJWT()
    }
    
    func fetchUserAvatarImage() {
        keychainController.storeAvatarImage(jWT: self.jWT ?? "")
    }
}
