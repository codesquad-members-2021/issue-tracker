//
//  Issue_TrackkerNetworkTests.swift
//  Issue-TrackkerNetworkTests
//
//  Created by 심영민 on 2021/06/15.
//

import XCTest
@testable import Alamofire

class MockManager: SessionProtocol {
    var requestParameters: (
        url: URLConvertible,
        method: HTTPMethod,
        parameters: Parameters?
    )?
    
    func request(_ convertible: URLConvertible, method: HTTPMethod, parameters: Parameters?, encoding: ParameterEncoding, headers: HTTPHeaders?, interceptor: RequestInterceptor?, requestModifier: Session.RequestModifier?) -> DataRequest {
        
        self.requestParameters = (
            url: convertible,
            method: method,
            parameters: parameters
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

class Issue_TrackkerNetworkTests: XCTestCase {
    func testNetwork() {
        let NetworkManager: MockManager
        let network = Network()
        let endPoint = MainEndPoint(path: "/index", httpMethod: .get)
        
        XCTAssertEqual(endPoint.url(), "https://naver.com/index")
        XCTAssertEqual(endPoint.httpMethod, .get)
        XCTAssertEqual(endPoint.path, "/index")
    }
}



