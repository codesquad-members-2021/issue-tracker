//
//  KeyChainManager.swift
//  issue-tracker
//
//  Created by Song on 2021/06/10.
//

import Foundation
import Security

final class LoginKeyChainManager {
    
    private let loginService: String

    init(loginService: LoginService) {
        self.loginService = loginService.description
    }
    
    func save(_ loginInfoDTO: LoginInfoDTO) -> Bool {
        guard let loginInfo = try? JSONEncoder().encode(loginInfoDTO) else { return false }
        
        let saveQuery: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                          kSecAttrService: loginService,
                                          kSecAttrGeneric: loginInfo]
        
        return SecItemAdd(saveQuery as CFDictionary, nil) == errSecSuccess
    }
    
    func read() -> LoginInfoDTO? {
        let readQuery: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                          kSecAttrService: loginService,
                                          kSecMatchLimit: kSecMatchLimitOne,
                                          kSecReturnAttributes: true,
                                          kSecReturnData: true]
        
        var item: CFTypeRef?
        
        guard SecItemCopyMatching(readQuery as CFDictionary, &item) == errSecSuccess,
              let existingItem = item as? [String: Any],
              let data = existingItem[kSecAttrGeneric as String] as? Data,
              let loginInfoDTO = try? JSONDecoder().decode(LoginInfoDTO.self, from: data) else { return nil }

        return loginInfoDTO
    }
    
    func delete() -> Bool {
        let deleteQuery: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                            kSecAttrService: loginService]
        return SecItemDelete(deleteQuery as CFDictionary) == errSecSuccess
    }
    
}
