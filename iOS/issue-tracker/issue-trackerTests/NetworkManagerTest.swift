import XCTest

class NetworkManagerTest: XCTestCase {

    func test_JWT_존재하지_않을_경우() throws {
        // given
        let urlSessionStub = URLSessionStub()
        let jwtManagerStub = JWTManagerStub()
        let networkManager = NetworkManager(jwtManager: jwtManagerStub, session: urlSessionStub)
        
        let expectedAddress = "http://52.78.35.48/api"
        let url = URL(string: expectedAddress)
        
        // when
        _ = networkManager.get(with: url, type: TestDTO.self)
        
        // then
        XCTAssertEqual(urlSessionStub.request?.url?.absoluteString, expectedAddress)
    }

    func test_JWT_존재할_경우() throws {
        // given
        let urlSessionStub = URLSessionStub()
        let jwtManagerStub = JWTManagerStub()
        let networkManager = NetworkManager(jwtManager: jwtManagerStub, session: urlSessionStub)
        
        let expectedAddress = "http://52.78.35.48/api"
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
