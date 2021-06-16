//
//  GithubConfigurationTests.swift
//  issue-trackerTests
//
//  Created by HOONHA CHOI on 2021/06/13.
//

import XCTest

class GithubConfigurationTests: XCTestCase {

    func test_GithubLoginBaseURLString() {
        let baseURLString = GithubConfiguration.scheme + "://" +  GithubConfiguration.host + GithubConfiguration.path
        let expectedBaseURLString = "https://github.com/login/oauth/authorize"
        XCTAssertEqual(baseURLString, expectedBaseURLString)
    }

    func test_BundlePath_ClientID_Fetct() {
        XCTAssertEqual(fetctMockKey(), "testClientId")
    }

    func test_ClientAddURL_IsCorrect() throws {
        let baseURLString = GithubConfiguration.scheme + "://" + GithubConfiguration.host + GithubConfiguration.path +
            "?client_id=" + fetctMockKey()
        let expectedGithubRequsetURL = "https://github.com/login/oauth/authorize?client_id=testClientId"
        XCTAssertEqual(baseURLString, expectedGithubRequsetURL)
    }

    private func fetctMockKey() -> String {
        guard let filePath = Bundle.main.path(forResource: "ClientId", ofType: "plist") else {
            XCTFail("not Found ClientId.plist")
            return ""
        }
        let plist = NSDictionary(contentsOfFile: filePath)
        guard let mockKey = plist?.object(forKey: "Mock") as? String else {
            XCTFail("can't String TypeCasting")
            return ""
        }
        return mockKey
    }
}
