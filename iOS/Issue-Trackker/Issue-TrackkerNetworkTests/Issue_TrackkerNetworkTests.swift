//
//  Issue_TrackkerNetworkTests.swift
//  Issue-TrackkerNetworkTests
//
//  Created by 심영민 on 2021/06/15.
//

import XCTest
@testable import Alamofire

class Issue_TrackkerNetworkTests: XCTestCase {
    
    func testNetwork_withoutInternet() {
        let fakeAF: FakeAF = FakeAF()
        let request = MainEndPoint(path: "/index", httpMethod: .get)
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        
        let networkManager = NetworkManager(with: fakeAF, with: request, with: decoder)
        
        networkManager.request(dataType: IssueList.self, completion: { _ in
        })
        
        let param = fakeAF.requestParameters
        
        XCTAssertEqual(try param?.url.asURL().absoluteString, "/index")
        XCTAssertEqual(param?.method, .get)
    }
    
    func testNetwork_availableInternet() {
        
        let request = LocalEndPoint(path: Bundle.main.path(forResource: "mockData", ofType: "json")!,
                                   httpMethod: .get)
        
        let networkManager = NetworkManager(with: AF, with: request, with: JSONDecoder())
        let expectation = XCTestExpectation()
        
        networkManager.request(dataType: IssueList.self) { result in
            switch result {
            case .success(let _):
                XCTAssertEqual(result.success?.issues.contains(where: { issue in
                    issue.title == "이슈 제목"
                }), true)
                expectation.fulfill()
            case .failure(_):
                XCTFail("실패")
            }
        }
        
        XCTWaiter.wait(for: [expectation], timeout: 5)
    }
}
