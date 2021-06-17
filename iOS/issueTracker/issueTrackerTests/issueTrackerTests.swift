//
//  issueTrackerTests.swift
//  issueTrackerTests
//
//  Created by 박정하 on 2021/06/15.
//

import XCTest
@testable import Alamofire

final class SessionManagerStub: SessionProtocol {
    var requestParam: (
        url: URLConvertible,
        method: HTTPMethod
    )?
    
    func request(_ convertible: URLConvertible,
                 method: HTTPMethod,
                 parameters: Parameters?,
                 encoding: ParameterEncoding,
                 headers: HTTPHeaders?,
                 interceptor: RequestInterceptor?,
                 requestModifier: Session.RequestModifier?) -> DataRequest {
        self.requestParam = (
            url: convertible,
            method: method
        )
        let convertible = Session.RequestConvertible(url: convertible,
                                             method: method,
                                             parameters: parameters,
                                             encoding: encoding,
                                             headers: headers,
                                             requestModifier: requestModifier)

        return Session().request(convertible, interceptor: interceptor)
    }
}

class IssueTrackerTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        measure {
            // Put the code you want to measure the time of here.
        }
    }
    
    func test_네트워크_이슈_모델() throws {
        let path = Bundle.main.path(forResource: "test", ofType: "json")
        
        guard let mypath = path else {
            return
        }

        let requestable = APIEndPoint.init(path: mypath, httpMethod: .get, decodingStrategy: .convertFromSnakeCase)
        let promise = expectation(description: "성공!")
        NetworkManager.requestLocal(with: requestable, type: Issues.self) { result in
            switch result {
            case .success(let data):
                XCTAssertEqual(data.issues[0].issueId, 0)
                promise.fulfill()
            case .failure(_):
                XCTFail("네트워크 접속 오류")
            }
        }
        wait(for: [promise], timeout: 3)
    }
    
    func test_네트워크_통신_테스트() throws {
        // given
        let sessionManager = SessionManagerStub()
        let requestable = APIEndPoint.init(path: "/endpoint", httpMethod: .get, decodingStrategy: .convertFromSnakeCase)
        let networkManager = NetworkManager.init(localAF: sessionManager)
        
        // when
        networkManager.request(with: requestable, type: IssueResponse.self) { _ in }
        let param = sessionManager.requestParam
        
        // then
        XCTAssertEqual(try param?.url.asURL().absoluteString,
                       "ec2-52-79-56-138.ap-northeast-2.compute.amazonaws.com/endpoint")
        XCTAssertEqual(param?.method, .post)
    }
}
