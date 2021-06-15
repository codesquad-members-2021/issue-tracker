//
//  NetworkManager.swift
//  issue-tracker
//
//  Created by jinseo park on 6/9/21.
//

import Foundation
import Alamofire

protocol NetworkManagerOperations {
    func get<T: Decodable>(completion: @escaping (Result<T,Error>) -> Void)
}

final class NetworkManager: NetworkManagerOperations {
    
    private let requestManager: RequestManager
    
    init(requestManager: RequestManager) {
        self.requestManager = requestManager
    }

    func get<T: Decodable>(completion: @escaping (Result<T, Error>) -> Void) {
            
        let request = requestManager.create(method: .get)
        
        request.responseDecodable(of: T.self) { response in
                switch response.result {
                case .success(let data):
                    completion(.success(data))
                case .failure(let error):
                    print(error.localizedDescription)
                }
            }
    }
}
