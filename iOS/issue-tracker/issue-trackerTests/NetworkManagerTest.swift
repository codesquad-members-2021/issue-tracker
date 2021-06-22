import XCTest

class NetworkManagerTest: XCTestCase {

    func test_JWT_존재할_경우() throws {
        // given
        let urlSessionStub = URLSessionStub()
        let jwtManagerStub = JWTManagerStub()
        let networkManager = NetworkManager(jwtManager: jwtManagerStub, session: urlSessionStub)
        
        let expectedAddress = "http://13.125.35.62/api"
        let url = URL(string: expectedAddress)
        
        // when
        _ = networkManager.get(with: url, type: TestDTO.self)
        
        // then
        XCTAssertEqual(urlSessionStub.request?.url?.absoluteString, expectedAddress)
    }

    func test_JWT_존재하지_않을_경우() throws {
        // given
        let urlSessionStub = URLSessionStub()
        let jwtManagerStub = JWTManagerStub()
        let networkManager = NetworkManager(jwtManager: jwtManagerStub, session: urlSessionStub)
        
        let expectedAddress = "http://13.125.35.62/api"
        let url = URL(string: expectedAddress)
        
        let expectedHeaderValue = "Bearer jwt"
        jwtManagerStub.string = "jwt"
        
        // when
        _ = networkManager.get(with: url, type: TestDTO.self)
        
        // then
        XCTAssertEqual(urlSessionStub.request?.url?.absoluteString, expectedAddress)
        XCTAssertEqual(urlSessionStub.request?.value(forHTTPHeaderField: "Authorization"), expectedHeaderValue)
    }
}

class URLSessionStub: URLSessionProtocol {
    
    var request: URLRequest?
    
    func dataTaskPublisher(for request: URLRequest) -> URLSession.DataTaskPublisher {
        self.request = request
        return URLSession.DataTaskPublisher(request: URLRequest(url: URL(string: "a")!), session: URLSession.init(configuration: .default))
    }
    
}

class JWTManagerStub: JWTManageable {
    
    var string: String?
    
    func get() -> String? {
        return string
    }
    
    func set(jwt: String) -> Bool {
        return true
    }
    
}

struct TestDTO: Decodable {
    let test: String
}
