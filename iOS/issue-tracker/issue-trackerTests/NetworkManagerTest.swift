import XCTest

class NetworkManagerTest: XCTestCase {

    var sampleURL: URL!
    
    override func setUpWithError() throws {
        try super.setUpWithError()
        sampleURL = URL(string: "www.sample.com")
    }
    
    func test_body가_없는_경우() throws {
        let jwtManagerStub = JWTManagerStub()
        let requestManager = RequestManager(jwtManager: jwtManagerStub)
        let urlSessionStub = URLSessionStub()
        let networkManager = NetworkManager(requestManager: requestManager, session: urlSessionStub)
        
        _ = networkManager.sendRequest(with: sampleURL, method: .get, type: TestDecodableDTO.self)
        
        XCTAssertEqual(urlSessionStub.request?.url, sampleURL)
        XCTAssertEqual(urlSessionStub.request?.httpMethod, HttpMethod.get.rawValue)
    }
    
}
