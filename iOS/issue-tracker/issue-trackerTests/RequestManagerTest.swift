import XCTest

class RequestManagerTest: XCTestCase {
    
    var sampleURL: URL!
    var sampleData: Data!
    
    override func setUpWithError() throws {
        try super.setUpWithError()
        let str = "sampleString"
        guard let url = URL(string: "www.sample.com") else { return }
        guard let data = str.data(using: String.Encoding.utf8) else { return }
        self.sampleURL = url
        self.sampleData = data
    }
    
    func test_jwt_없음_body_없음() throws {
        // given
        let jwtManagerStub = JWTManagerStub()
        jwtManagerStub.string = nil
        
        let requestManager = RequestManager(jwtManager: jwtManagerStub)
        let header = "Authorization"
        
        // when
        let urlRequest = requestManager.makeRequest(url: sampleURL, method: .get, body: nil)
        
        // then
        XCTAssertEqual(urlRequest.httpBody, nil)
        XCTAssertEqual(urlRequest.value(forHTTPHeaderField: header), nil)
    }
    
    func test_jwt_있음_body_없음() throws {
        // given
        let jwtManagerStub = JWTManagerStub()
        jwtManagerStub.string = "jwt"
        
        let requestManager = RequestManager(jwtManager: jwtManagerStub)
        let header = "Authorization"
        
        // when
        let urlRequest = requestManager.makeRequest(url: sampleURL, method: .get, body: nil)
        
        // then
        XCTAssertEqual(urlRequest.httpBody, nil)
        XCTAssertEqual(urlRequest.value(forHTTPHeaderField: header), "Bearer jwt")
    }
    
    func test_jwt_없음_body_있음() throws {
        // given
        let jwtManagerStub = JWTManagerStub()
        jwtManagerStub.string = nil
        
        let requestManager = RequestManager(jwtManager: jwtManagerStub)
        let header = "Authorization"
        
        // when
        let urlRequest = requestManager.makeRequest(url: sampleURL, method: .get, body: sampleData)
        
        // then
        XCTAssertEqual(urlRequest.value(forHTTPHeaderField: header), nil)
        XCTAssertEqual(urlRequest.httpBody, sampleData)
    }
    
    func test_jwt_있음_body_있음() throws {
        // given
        let jwtManagerStub = JWTManagerStub()
        jwtManagerStub.string = "jwt"
        
        let requestManager = RequestManager(jwtManager: jwtManagerStub)
        let header = "Authorization"
        
        // when
        let urlRequest = requestManager.makeRequest(url: sampleURL, method: .get, body: sampleData)
        
        // then
        XCTAssertEqual(urlRequest.httpBody, sampleData)
        XCTAssertEqual(urlRequest.value(forHTTPHeaderField: header), "Bearer jwt")
    }
    
}
