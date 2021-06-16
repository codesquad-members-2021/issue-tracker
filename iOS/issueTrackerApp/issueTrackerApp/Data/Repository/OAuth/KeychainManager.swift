//
//  KeychainManager.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/08.
//

import Foundation
import JWTDecode

class KeychainManager {
    private static let accountName = "AppUser"
    
    func readJWT() -> String? {
        var query = tokenQuery
        query[kSecMatchLimit as String] = kSecMatchLimitOne
        query[kSecReturnAttributes as String] = true
        query[kSecReturnData as String] = true
        var keychainItem: CFTypeRef?
        let status = SecItemCopyMatching(query as CFDictionary, &keychainItem)
        guard status != errSecItemNotFound else {
            return nil
        }
        guard let item = keychainItem as? [String : Any],
              let data = item[kSecValueData as String] as? Data,
              let token = String(data: data, encoding: .utf8) else {
            return nil
        }
        return token
    }
    
    func store(jWT: String) {
        let encodedToken = jWT.data(using: .utf8)!
        var query: [String: Any] = tokenQuery
        if let _ = readJWT() {
            SecItemUpdate(query as CFDictionary, [kSecValueData as String: encodedToken] as CFDictionary)
        } else {
            query[kSecValueData as String] = encodedToken
            SecItemAdd(query as CFDictionary, nil)
        }
    }
    
    func deleteJWT() {
        SecItemDelete(tokenQuery as CFDictionary)
    }
    
    func storeAvatarImage(jWT: String) {
        if let decodedToken = try? decode(jwt: jWT) {
            print(decodedToken)
        }
    }
}

//MARK:- Private
private extension KeychainManager {
    var tokenQuery: [String: Any] {
        return [
            kSecClass as String: kSecClassInternetPassword,
            kSecAttrAccount as String: KeychainManager.accountName,
            kSecAttrServer as String: GitHubEndpoint.serverURL.absoluteString
        ]
    }
}
