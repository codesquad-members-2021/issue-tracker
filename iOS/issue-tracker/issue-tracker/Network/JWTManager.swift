import Foundation
import Security

protocol JWTManageable {
    func get() -> String?
    func set(jwt: String) -> Bool
}

struct JWTManager: JWTManageable {
    
    func get() -> String? {
        let keyChainQuery: NSDictionary = [
            kSecClass: kSecClassCertificate,
            kSecReturnData: true,
            kSecMatchLimit: kSecMatchLimitOne
        ]
        
        var dataTypeRef: AnyObject?
        let status = SecItemCopyMatching(keyChainQuery, &dataTypeRef)
        
        guard status == errSecSuccess, let retrievedData = dataTypeRef as? Data else { return nil }
        let value = String(data: retrievedData, encoding: String.Encoding.utf8)
        return value
    }
    
    func set(jwt: String) -> Bool {
        if jwt == "" {
            return false
        }
        
        let keyChainQuery: NSDictionary = [
            kSecClass: kSecClassCertificate,
            kSecValueData: jwt.data(using: .utf8, allowLossyConversion: false) ?? ""
        ]
        
        SecItemDelete(keyChainQuery)
        
        let status: OSStatus = SecItemAdd(keyChainQuery, nil)
        return status == noErr
    }
    
}
