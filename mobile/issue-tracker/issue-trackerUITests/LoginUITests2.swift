//
//  issue_trackerUITests.swift
//  issue-trackerUITests
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import XCTest

class LoginUITests2: XCTestCase {

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

    func test_LoginContinue() throws {

        app/*@START_MENU_TOKEN@*/.staticTexts["Sign in with GitHub"]/*[[".buttons[\"Sign in with GitHub\"].staticTexts[\"Sign in with GitHub\"]",".staticTexts[\"Sign in with GitHub\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/.tap()
        addUIInterruptionMonitor(withDescription: "Login Continue") { (alert) -> Bool in
            if alert.buttons["Continue"].exists {
                alert.buttons["Continue"].tap()
                self.expectation.fulfill()
                return true
            }
            return false
        }
        app.tap()
        wait(for: [expectation], timeout: 10)

        let tabBar = app.tabBars["Tab Bar"]
        tabBar.buttons["이슈"].tap()
        XCTAssertTrue(app.otherElements["MainView"].exists)
    }
}
