//
//  JWTManagerTest.swift
//  issue-trackerTests
//
//  Created by user on 2021/06/15.
//

import XCTest

class JWTManagerTest: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

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
