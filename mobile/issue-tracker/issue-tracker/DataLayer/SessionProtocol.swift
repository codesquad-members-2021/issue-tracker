//
//  SessionProtocol.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/14.
//

import Foundation
import Combine

protocol SessionProtocol {
    func dataTaskPublisher(for request: URLRequest) -> URLSession.DataTaskPublisher
}
extension URLSession: SessionProtocol {}
