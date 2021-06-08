//
//  NetworkController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import Foundation

class NetworkController {
    private let keychainController: KeychainController
    
    init(keychainController: KeychainController) {
        self.keychainController = keychainController
    }
}
