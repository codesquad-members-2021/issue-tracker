//
//  Network.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/13.
//

import Foundation
import Alamofire

class Network {
    func request<T: Decodable> (with endPoint: Requestable, dataType: T.Type, completion: @escaping (Result<T,AFError>) -> Void) {
        
        guard let url = endPoint.url() else {
            completion(.failure(AFError.createURLRequestFailed(error: NetworkError.url(description: ("Couldn't Create URL")))))
            return
        }
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        AF.request(url, method: endPoint.httpMethod)
            .validate(statusCode: 200..<300)
            .responseDecodable(of: T.self, decoder: decoder) { response in
                switch response.result {
                case .failure(let error):
                    completion(.failure(error))
                case .success(let data):
                    completion(.success((data)))
                }
            }
    }
}
