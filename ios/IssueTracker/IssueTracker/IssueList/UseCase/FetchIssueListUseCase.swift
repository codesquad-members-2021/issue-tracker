//
//  FetchIssueListUseCase.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/15.
//

import Foundation
import UIKit

protocol FetchIssueListUseCase {
    
    func excute(completion: @escaping (Result<[Issue], Error>) -> Void)
}

final class DefaultFetchIssueListUseCase: FetchIssueListUseCase {
    func excute(completion: @escaping (Result<[Issue], Error>) -> Void) {
        // 기준이 될 UseCase 입니다. NetworkService를 가지고 있으며 Network 통신을 이용한 Issue List Fetch 가 이루어 져야 합니다.
    }
}

final class MockFetchIssueListUseCase: FetchIssueListUseCase {
    func excute(completion: @escaping (Result<[Issue], Error>) -> Void) {
        completion(.success(IssueListMock.data))
    }
}
