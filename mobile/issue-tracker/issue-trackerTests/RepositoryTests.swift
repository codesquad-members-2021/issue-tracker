//
//  LoginViewModelTests.swift
//  issue-trackerTests
//
//  Created by HOONHA CHOI on 2021/06/14.
//

import XCTest
import Combine

class RepositoryTests: XCTestCase {

    private var cancellable: Set<AnyCancellable>!

    override func setUp() {
        super.setUp()
        cancellable = []
    }

    func test_SessionNetwork() throws {
        guard let urlRequest = Endpoint.authURLRequest(to: "mock") else {
            XCTFail("not URL")
            return
        }

        let sessionStub = SessionStub()
        sessionStub.dataTaskPublisher(for: urlRequest).sink { _ in }
            receiveValue: { _ in }
            .store(in: &cancellable)

        let expectedURL = "http://localhost:8080/api/ios/auth"
        XCTAssertEqual(sessionStub.URLRequestParameter?.url?.absoluteString, expectedURL)

        let expectedMethod = Method.post
        XCTAssertEqual(sessionStub.URLRequestParameter?.httpMethod, expectedMethod.rawValue)

    }

}
