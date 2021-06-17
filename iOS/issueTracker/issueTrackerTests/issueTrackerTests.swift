//
//  issueTrackerTests.swift
//  issueTrackerTests
//
//  Created by 박정하 on 2021/06/14.
//

import XCTest

class IssueTrackerTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        measure {
            // Put the code you want to measure the time of here.
        }
    }
    
    func test_네트워크_함수() throws {
        let requestable: Requestable = APIEndPoint.init(path: "/endPoint", httpMethod: .get)
        NetworkManager.request(with: requestable, type: IssueDTO.self) { result in
            switch result {
            case .success(let data):
                print(data)
                XCTAssertNil(data)
            case .failure(_):
                
            }
        }
    }
}
