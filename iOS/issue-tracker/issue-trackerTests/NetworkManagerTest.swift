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

//    func test_body가_있는_경우() throws {
//        let jwtManagerStub = JWTManagerStub()
//        let requestManager = RequestManager(jwtManager: jwtManagerStub)
//        let urlSessionStub = URLSessionStub()
//        let networkManager = NetworkManager(requestManager: requestManager, session: urlSessionStub)
//        let testEncodableObject = TestEncodableDTO(test: "test")
//        let expectation = expectation(description: "combine")
//        expectation.assertForOverFulfill = false
//        let a = networkManager.sendRequest(with: sampleURL, method: .get, type: TestDecodableDTO.self, body: testEncodableObject)
//
//        a.sink { result in
//            switch result {
//            case .failure(let error):
//                expectation.fulfill()
//            case .finished:
//                expectation.fulfill()
//            }
//            expectation.fulfill()
//        } receiveValue: { _ in
//            expectation.fulfill()
//        }
//
//        wait(for: [expectation], timeout: 5)
//
//        XCTAssertEqual(urlSessionStub.request?.url, sampleURL)
//        XCTAssertEqual(urlSessionStub.request?.httpMethod, HttpMethod.get.rawValue)
//    }
    
}
