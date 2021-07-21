import Foundation

class JWTManagerStub: JWTManageable {
    
    var string: String?
    
    func get() -> String? {
        return string
    }
    
    func set(jwt: String) -> Bool {
        return true
    }
    
}
