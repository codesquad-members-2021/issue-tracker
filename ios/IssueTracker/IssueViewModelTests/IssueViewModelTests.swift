//
//  IssueViewModelTests.swift
//  IssueViewModelTests
//
//  Created by Lia on 2021/06/10.
//

import XCTest

class IssueViewModelTests: XCTestCase {

    var mockIssue: [Issue]!
    var mockIssueViewModel: IssueViewModel?
    
    override func setUpWithError() throws {
        let aIssue = Issue(id: 0, number: 0, title: "title", description: "des", isOpened: true, isMyCommentExist: false, timeStamp: "date", writer: User(id: 0, name: "user"))
        let bIssue = Issue(id: 1, number: 0, title: "title", description: "des", isOpened: true, isMyCommentExist: false, timeStamp: "date", writer: User(id: 0, name: "user"))
        let cIssue = Issue(id: 2, number: 0, title: "title", description: "des", isOpened: true, isMyCommentExist: false, timeStamp: "date", writer: User(id: 0, name: "user"))
        let dIssue = Issue(id: 3, number: 0, title: "title", description: "des", isOpened: true, isMyCommentExist: false, timeStamp: "date", writer: User(id: 0, name: "user"))
        mockIssue = [aIssue, bIssue, cIssue, dIssue]
        mockIssueViewModel = IssueViewModel(issues: mockIssue)
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func test_이슈뷰모델_생성() {
        let mockIssue = Issue(id: 0, number: 0, title: "title", description: "des", isOpened: true, isMyCommentExist: false, timeStamp: "date", writer: User(id: 0, name: "user"))
        let mockIssueViewModel: IssueViewModel? = IssueViewModel(issues: [mockIssue])
        XCTAssertTrue(mockIssueViewModel != nil, "mockIssueViewModel 생성 실패")
        XCTAssertTrue(mockIssueViewModel?.issues[0] == mockIssue, "mockIssueViewModel의 issue 주입 실패")
    }
    
    func test_이슈뷰모델_이슈삭제() {
        mockIssueViewModel?.deleteIssue(at: 0)
        XCTAssertTrue(mockIssueViewModel!.issues.isEmpty, "mockIssueViewModel의 issue 삭제 실패")
    }
    
    func test_이슈뷰모델_이슈삭제_검사2() {
        mockIssueViewModel?.deleteIssue(at: 2)
        XCTAssertFalse(mockIssueViewModel!.issues.contains(mockIssue[2]), "mockIssueViewModel의 특정 index issue 삭제 실패")
    }

}
