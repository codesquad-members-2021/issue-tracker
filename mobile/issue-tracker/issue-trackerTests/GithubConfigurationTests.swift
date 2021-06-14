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

    func test_번들에서_클라이언트Id_가져오기() {
        XCTAssertEqual(fetctMockKey(), "testClientId")
    }

    func test_클라이언트포함URL_isCorrect() throws {
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
