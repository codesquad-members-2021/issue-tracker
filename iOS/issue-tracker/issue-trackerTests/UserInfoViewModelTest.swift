import XCTest
import Combine

class UserInfoViewModelTest: XCTestCase {

    var subscriptions = Set<AnyCancellable>()

    func test_유저정보_받아오기_성공() throws {
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
    
    func test_유저정보_받아오기_실패() throws {
        let userInfoUseCaseStub = UserInfoUseCaseStub(success: false)
        let userInfoViewModel = UserInfoViewModel(userInfoUseCase: userInfoUseCaseStub)
        let expectation = expectation(description: "didUpdateThumbnailImage")
        expectation.assertForOverFulfill = false
        var expectedValue: NetworkError?

        userInfoViewModel.didUpdateErrorMessage()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        userInfoViewModel.fetchThumbnailImage()

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue, NetworkError.networkConnection)
    }

}
