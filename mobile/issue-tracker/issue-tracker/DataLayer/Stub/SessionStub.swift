//
//  SessionStub.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/14.
//

import Foundation

final class SessionStub: SessionProtocol {
    var URLRequestParameter: (URLRequest)?

    func dataTaskPublisher(for request: URLRequest) -> URLSession.DataTaskPublisher {
        self.URLRequestParameter = request
        return .init(request: request, session: .shared)
    }
}
