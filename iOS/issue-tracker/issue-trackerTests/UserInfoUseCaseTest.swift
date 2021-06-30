//
//  UserInfoUseCaseTest.swift
//  issue-trackerTests
//
//  Created by user on 2021/06/30.
//

import XCTest
import Combine

class UserInfoUseCaseTest: XCTestCase {

    var subscriptions = Set<AnyCancellable>()

    func testExample() throws {
        let userInfoUseCaseStub = UserInfoUseCaseStub(success: true)
        let userInfoViewModel = UserInfoViewModel(userInfoUseCase: userInfoUseCaseStub)
        let expectation = expectation(description: "didUpdateThumbnailImage")
        expectation.assertForOverFulfill = false
        var expectedValue: String = ""

        userInfoViewModel.didUpdateThumbnailImage()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        userInfoViewModel.fetchThumbnailImage()

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue, userInfoUseCaseStub.result)
    }
    
//    func testExample1() throws {
//        let userInfoUseCaseStub = UserInfoUseCaseStub(success: false)
//        let userInfoViewModel = UserInfoViewModel(userInfoUseCase: userInfoUseCaseStub)
//        let expectation = expectation(description: "didUpdateThumbnailImage")
//        expectation.assertForOverFulfill = false
//        var expectedValue: NetworkError?
//
//        userInfoViewModel.didUpdateErrorMessage()
//            .sink { value in
//                expectedValue = value
//                expectation.fulfill()
//            }.store(in: &subscriptions)
//        userInfoViewModel.fetchThumbnailImage()
//
//        wait(for: [expectation], timeout: 1)
//        XCTAssertEqual(expectedValue!, Error)
//    }

}

class UserInfoUseCaseStub: UserInfoUseCase {
    
    var success: Bool
    var result: String
    
    init(success: Bool) {
        self.success = success
        self.result = "success"
    }
    
    func executeFetchingUserInfo(completion: @escaping (Result<String, NetworkError>) -> Void) {
        switch success {
        case true:
            completion(Result.success(self.result))
        case false:
            completion(Result.failure(.networkConnection(desciption: "network failure")))
        }
    }
    
}
