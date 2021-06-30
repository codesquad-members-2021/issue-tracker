import Foundation

protocol URLSessionProtocol {
    
    func dataTaskPublisher(for request: URLRequest) -> URLSession.DataTaskPublisher
    
}

extension URLSession: URLSessionProtocol { }
