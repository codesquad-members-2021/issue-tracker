//
//  issue_trackerUITests.swift
//  issue-trackerUITests
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import XCTest

class IssuetrackerUITests: XCTestCase {
    let app = XCUIApplication()

    override func setUp() {
        super.setUp()
        app.launch()
    }

    func test_LoginLogicUI() throws {

        let test = expectation(description: "Login succeuss After")

        app/*@START_MENU_TOKEN@*/.staticTexts["Sign in with GitHub"]/*[[".buttons[\"Sign in with GitHub\"].staticTexts[\"Sign in with GitHub\"]",".staticTexts[\"Sign in with GitHub\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/.tap()
        _ = app.alerts["“issue-tracker” Wants to Use “github.com” to Sign In"]

        addUIInterruptionMonitor(withDescription: "Login Continue") { (alert) -> Bool in
            alert.buttons["Continue"].tap()
            test.fulfill()
            return true
        }
        app.tap()
        wait(for: [test], timeout: 5)

        app.buttons["add"].tap()
        let navigationBar = app.navigationBars["이슈"]
        navigationBar.buttons["선택"].tap()
        navigationBar.buttons["필터"].tap()
    }
}
