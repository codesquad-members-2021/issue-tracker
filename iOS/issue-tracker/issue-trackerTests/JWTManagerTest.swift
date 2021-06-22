import XCTest

class JWTManagerTest: XCTestCase {

    func test_jwt_set_success() {
        let jwtManager = JWTManager()
        let status = jwtManager.set(jwt: "1234")
        
        XCTAssertEqual(status, true)
    }
    
    func test_jwt_set_failure() {
        let jwtManager = JWTManager()
        let status = jwtManager.set(jwt: "")
        
        XCTAssertEqual(status, false)
    }
    
    func test_jwt_get_success() {
        let jwtManager = JWTManager()
        var _ = jwtManager.set(jwt: "1234")
        let get = jwtManager.get()
        
        XCTAssertEqual(get, "1234")
    }
    
    func test_jwt_get_failure() {
        let jwtManager = JWTManager()
        var _ = jwtManager.set(jwt: "1234")
        let get = jwtManager.get()
        
        XCTAssertNotEqual(get, "234")
    }
    
    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
