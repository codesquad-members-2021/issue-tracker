import Foundation

class URLSessionStub: URLSessionProtocol {
    
    var request: URLRequest?
    
    func dataTaskPublisher(for request: URLRequest) -> URLSession.DataTaskPublisher {
        self.request = request
        return URLSession.DataTaskPublisher(request: URLRequest(url: URL(string: "a")!), session: URLSession.init(configuration: .default))
    }
    
}
