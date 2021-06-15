//
//  issueTrackerTests.swift
//  issueTrackerTests
//
//  Created by 박정하 on 2021/06/15.
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
    
    func test_네트워크_이슈_모델() throws {
        let requestable = APIEndPoint.init(path: "/endPoint", httpMethod: .get)
        let promise = expectation(description: "status code 200")
        NetworkManager.request(with: requestable, type: IssueDTO.self) { result in
            switch result {
            case .success(let data):
                promise.fulfill()
                XCTAssertEqual(data, IssueDTO.empty)
            case .failure(_):
                XCTFail("야이 씨벌 네트워크 접속도 못햇다")
            }
        }
        wait(for: [promise], timeout: 3)
    }
    
    func test_네트워크_유알엘만들기() throws {
        let requestable = APIEndPoint.init(path: "/endPoint", httpMethod: .get)
        guard let url = requestable.url() else {
            let networkErrorDescription = NetworkError.url(description: ("Couldn't Create URL"))
            XCTFail("유알엘 만들다가 터짐")
            return
        }
    }
    
}
