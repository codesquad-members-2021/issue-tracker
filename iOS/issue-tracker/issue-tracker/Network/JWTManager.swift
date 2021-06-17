import Foundation
import Security

struct JWTManager {
    func get() -> String? {
        let keyChainQuery: NSDictionary = [
            kSecClass: kSecClassCertificate,
            kSecReturnData: kCFBooleanTrue,
            kSecMatchLimit: kSecMatchLimitOne
        ]
        
        var dataTypeRef: AnyObject?
        let status = SecItemCopyMatching(keyChainQuery, &dataTypeRef)
        
        if status == errSecSuccess {
            guard let retrievedData = dataTypeRef as? Data else {
                return nil
            }
            let value = String(data: retrievedData, encoding: String.Encoding.utf8)
            return value
        } else {
            return nil
        }
    }
    
    func set(jwt: String) -> Bool {
        if jwt == "" {
            return false
        }
        
        let keyChainQuery: NSDictionary = [
            kSecClass: kSecClassCertificate,
            kSecValueData: jwt.data(using: .utf8, allowLossyConversion: false)
        ]
        
        SecItemDelete(keyChainQuery)
        
        let status: OSStatus = SecItemAdd(keyChainQuery, nil)
        return status == noErr
    }
}
