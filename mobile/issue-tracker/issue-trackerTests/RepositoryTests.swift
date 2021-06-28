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
    private var sut: MockRepository!

    override func setUp() {
        super.setUp()
        sut = MockRepository()
        cancellable = []
    }

    override func tearDown() {
        sut = nil
        cancellable = nil
        super.tearDown()
    }

    func test_토큰요청_성공() {
        let expectation = XCTestExpectation(description: "성공적인 로그인")
        let expectedToken = ["testToken": "testString"]

        sut.requestUserAuth(to: "test").sink {
            if case .failure = $0 {
                XCTFail("데이터를 가져오는데 실패")
            }
        } receiveValue: { token in
            XCTAssertEqual(token, expectedToken)
            expectation.fulfill()
        }.store(in: &cancellable)
        wait(for: [expectation], timeout: 1)
    }

    func test_토큰요청_실패() {
        let expectation = XCTestExpectation(description: "토큰 요청 실패")
        let expectedError = NetworkError.invalidRequest

        sut.error = NetworkError.invalidRequest
        sut.requestUserAuth(to: "test").sink { complete in
            if case .failure(let error) = complete {
                XCTAssertEqual(error, expectedError)
                expectation.fulfill()
            }
        } receiveValue: { _ in
            XCTFail("요청에 성공 하였습니다.")
        }.store(in: &cancellable)
        wait(for: [expectation], timeout: 1)
    }

}
