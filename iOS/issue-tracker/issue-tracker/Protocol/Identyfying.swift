import Foundation

protocol Identifying {
    
    static var identifier: String { get }
    
}

extension Identifying {
    
    static var identifier: String {
        return String(describing: Self.self)
    }
    
}
