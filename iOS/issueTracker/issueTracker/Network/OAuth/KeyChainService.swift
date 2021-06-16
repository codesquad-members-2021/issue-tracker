//
//  KeyChainService.swift
//  issueTracker
//
//  Created by 오킹 on 2021/06/15.
//

import Foundation

class KeyChainService {
    
    static var shared = KeyChainService()
    
    func createUser(_ user: User, service: Service) -> Bool {
        guard let data = try? JSONEncoder().encode(user) else { return false }

        let query: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                      kSecAttrService: "\(service.rawValue)",
                                      kSecAttrAccount: "계정",
                                      kSecAttrGeneric: data]

        return SecItemAdd(query as CFDictionary, nil) == errSecSuccess
     }
    
    func readUser(service: Service) -> User? {
      let query: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                    kSecAttrService: "\(service.rawValue)",
                                    kSecAttrAccount: "계정",
                                    kSecMatchLimit: kSecMatchLimitOne,
                                    kSecReturnAttributes: true,
                                    kSecReturnData: true]

      var item: CFTypeRef?
      if SecItemCopyMatching(query as CFDictionary, &item) != errSecSuccess { return nil }

      guard let existingItem = item as? [CFString: Any],
        let data = existingItem[kSecAttrGeneric] as? Data,
        let user = try? JSONDecoder().decode(User.self, from: data) else { return nil }

      return user
    }
    
    func updateUser(_ user: User, service: Service) -> Bool {
      guard let data = try? JSONEncoder().encode(user) else { return false }
        
      let query: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                    kSecAttrService: "\(service)",
                                    kSecAttrAccount: "계정"]
      let attributes: [CFString: Any] = [kSecAttrAccount: "계정",
                                         kSecAttrGeneric: data]

      return SecItemUpdate(query as CFDictionary, attributes as CFDictionary) == errSecSuccess
    }
    
    func deleteUser(service: Service) -> Bool {
      let query: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                    kSecAttrService: "\(service.rawValue)",
                                    kSecAttrAccount: "계정"]
     
      return SecItemDelete(query as CFDictionary) == errSecSuccess
    }
    
    func getCurrentUserJWT() -> String {
        var jwt = ""
        
        for service in Service.allCases {
            if self.readUser(service: service) != nil {
                jwt = readUser(service: service)!.jwtToken
            }
        }

        return jwt
    }

}
