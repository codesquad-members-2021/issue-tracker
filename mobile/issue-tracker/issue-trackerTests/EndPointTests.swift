//
//  EndPointTests.swift
//  issue-trackerTests
//
//  Created by HOONHA CHOI on 2021/06/14.
//

import XCTest

class EndPointTests: XCTestCase {

    var fakeURLRequest: URLRequest?

    override func setUp() {
        fakeURLRequest = Endpoint.authURLRequest(to: "fakeEncodable")
    }

    override func tearDown() {
        fakeURLRequest = nil
    }

    func test_EndpointURL_IsCorrect() {
        let expectedBaseURL = "http://localhost:8080/api/ios/auth"
        XCTAssertEqual(fakeURLRequest?.url, URL(string: expectedBaseURL))
    }

    func test_httpHeader_IsExist() {
        XCTAssertEqual(fakeURLRequest?.allHTTPHeaderFields?["Content-Type"], "application/json")
        XCTAssertEqual(fakeURLRequest?.allHTTPHeaderFields?.count, 1)
    }

    func test_httpMethod_PostIsCorrect() {
        let expectedMethod = Method.post.rawValue
        XCTAssertEqual(fakeURLRequest?.httpMethod, expectedMethod)
    }

    func test_httpBody_IsExist() {
        XCTAssertNotNil(fakeURLRequest?.httpBody)
    }
}
