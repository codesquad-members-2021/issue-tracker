//
//  issue_trackerUITests.swift
//  issue-trackerUITests
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import XCTest

class LoginUITests: XCTestCase {

    private var app: XCUIApplication!
    private var expectation: XCTestExpectation!

    override func setUpWithError() throws {
        try super.setUpWithError()
        app = XCUIApplication()
        app.launch()
        expectation = XCTestExpectation(description: "Login Success/Failure")
    }

    override func tearDownWithError() throws {
        app = nil
        expectation = nil
        try super.tearDownWithError()
    }

    func test_LoginCancel() throws {
        app/*@START_MENU_TOKEN@*/.staticTexts["Sign in with GitHub"]/*[[".buttons[\"Sign in with GitHub\"].staticTexts[\"Sign in with GitHub\"]",".staticTexts[\"Sign in with GitHub\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/.tap()
        addUIInterruptionMonitor(withDescription: "Login Continue") { (alert) -> Bool in
            if alert.buttons["Cancel"].exists {
                alert.buttons["Cancel"].tap()
                self.expectation.fulfill()
                return true
            }
            return false
        }
        app.tap()
        wait(for: [expectation], timeout: 3)

        XCTAssertTrue(app.alerts["인증에 실패 하였습니다"].exists)
        app.alerts.buttons["확인"].tap()

        XCTAssertTrue(app.otherElements["LoginView"].exists)
    }
}
