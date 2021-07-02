import XCTest
import Combine

class IssueListViewModelTest: XCTestCase {

    var subscriptions: Set<AnyCancellable>!
    
    override func setUpWithError() throws {
        try super.setUpWithError()
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func test_이슈리스트_받아오기_성공() throws {
        let issueListUseCaseStub = IssueListUseCaseStub(success: true, response: ResponseBodyDTO(data: nil, error: nil))
        let issueListViewModel = IssueListViewModel(issueListUseCase: issueListUseCaseStub)
        let expectation = expectation(description: "didUpdateIssueList")
        expectation.assertForOverFulfill = false
        var expectedValue: IssueList?

        issueListViewModel.didUpdateIssueList()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        issueListViewModel.fetchIssueList()

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue?.issues.first?.id, issueListUseCaseStub.resultIssueList.issues.first?.id)
        XCTAssertEqual(expectedValue?.issues.first?.title, issueListUseCaseStub.resultIssueList.issues.first?.title)
        XCTAssertEqual(expectedValue?.issues.first?.comment, issueListUseCaseStub.resultIssueList.issues.first?.comment)
        XCTAssertEqual(expectedValue?.issues.first?.milestone, issueListUseCaseStub.resultIssueList.issues.first?.milestone)
    }
    
    func test_이슈리스트_받아오기_실패() throws {
        let issueListUseCaseStub = IssueListUseCaseStub(success: false, response: ResponseBodyDTO(data: nil, error: nil))
        let issueListViewModel = IssueListViewModel(issueListUseCase: issueListUseCaseStub)
        let expectation = expectation(description: "didUpdateIssueList")
        expectation.assertForOverFulfill = false
        var expectedValue: NetworkError?

        issueListViewModel.didUpdateErrorMessage()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        issueListViewModel.fetchIssueList()

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue, NetworkError.networkConnection)
    }

    func test_이슈삭제_성공() throws {
        let issueListUseCaseStub = IssueListUseCaseStub(success: true, response: ResponseBodyDTO(data: "OK", error: nil))
        let issueListViewModel = IssueListViewModel(issueListUseCase: issueListUseCaseStub)
        let expectation = expectation(description: "didUpdateDeleteIssue")
        expectation.assertForOverFulfill = false
        var expectedValue: String?

        issueListViewModel.fetchIssueList()
        issueListViewModel.didUpdateResultMessage()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        issueListViewModel.delete(indexPath: IndexPath(row: 0, section: 0))

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue, "OK")
    }
    
    func test_이슈삭제_실패() throws {
        let issueListUseCaseStub = IssueListUseCaseStub(success: true, response: ResponseBodyDTO(data: nil, error: "삭제할 수 없습니다."))
        let issueListViewModel = IssueListViewModel(issueListUseCase: issueListUseCaseStub)
        let expectation = expectation(description: "didUpdateDeleteIssue")
        expectation.assertForOverFulfill = false
        var expectedValue: String?

        issueListViewModel.fetchIssueList()
        issueListViewModel.didUpdateResultMessage()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        issueListViewModel.delete(indexPath: IndexPath(row: 0, section: 0))

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue, "삭제할 수 없습니다.")
    }
    
    func test_이슈닫기_성공() throws {
        let issueListUseCaseStub = IssueListUseCaseStub(success: true, response: ResponseBodyDTO(data: "OK", error: nil))
        let issueListViewModel = IssueListViewModel(issueListUseCase: issueListUseCaseStub)
        let expectation = expectation(description: "didUpdateCloseIssue")
        expectation.assertForOverFulfill = false
        var expectedValue: String?
        
        issueListViewModel.fetchIssueList()
        issueListViewModel.didUpdateResultMessage()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        issueListViewModel.close(indexPath: IndexPath(row: 0, section: 0))

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue, "OK")
    }
    
    func test_이슈닫기_실패() throws {
        let issueListUseCaseStub = IssueListUseCaseStub(success: true, response: ResponseBodyDTO(data: nil, error: "이미 닫힌 이슈입니다."))
        let issueListViewModel = IssueListViewModel(issueListUseCase: issueListUseCaseStub)
        let expectation = expectation(description: "didUpdateCloseIssue")
        expectation.assertForOverFulfill = false
        var expectedValue: String?

        issueListViewModel.fetchIssueList()
        issueListViewModel.didUpdateResultMessage()
            .sink { value in
                expectedValue = value
                expectation.fulfill()
            }.store(in: &subscriptions)
        issueListViewModel.close(indexPath: IndexPath(row: 0, section: 0))

        wait(for: [expectation], timeout: 1)
        XCTAssertEqual(expectedValue, "이미 닫힌 이슈입니다.")
    }
    
}
