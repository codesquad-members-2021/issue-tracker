//
//  NetworkManager.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/14.
//

import Foundation
import Alamofire

class NetworkManager {
    
    static func request<T: Decodable> (with request: Requestable,
                                       type: T.Type,
                                       completion: @escaping (Result<T, AFError>) -> Void) {
        
        guard let url = request.url else {
            let networkErrorDescription = NetworkError.url(description: ("Couldn't Create URL"))
            completion(.failure(AFError.createURLRequestFailed(error: networkErrorDescription)))
            return
        }
        
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = request.decodingStrategy
        AF.request(url, method: request.httpMethod)
            .validate(statusCode: 200..<300)
            .responseDecodable(of: T.self, decoder: decoder) { response in
                switch response.result {
                case .success(let data):
                    completion(.success(data))
                case .failure(let error):
                    completion(.failure(error))
                }
            }
    }
}

enum NetworkError: Error {
    case url(description: String)
}
