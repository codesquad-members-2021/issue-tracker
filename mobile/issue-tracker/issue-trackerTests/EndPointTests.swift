//
//  EndPointTests.swift
//  issue-trackerTests
//
//  Created by HOONHA CHOI on 2021/06/14.
//

import XCTest

class EndPointTests: XCTestCase {

    func test_EndpointURL_IsCorrect() {
        let expectedBaseURL = "http://localhost:8080/api/ios/auth"
        XCTAssertEqual(Endpoint.url(rount: .auth), URL(string: expectedBaseURL))
    }

}
