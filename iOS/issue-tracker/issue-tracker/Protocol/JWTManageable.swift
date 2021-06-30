import Foundation

protocol JWTManageable {
    
    func get() -> String?
    func set(jwt: String) -> Bool
    
}
