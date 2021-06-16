//
//  Network.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/13.
//

import Foundation
import Alamofire

class NetworkManager {
    
    private var decoder: JSONDecoder
    private var request: Requestable
    
    init(with request: Requestable, with decoder: JSONDecoder) {
        self.request = request
        self.decoder = decoder
    }
    
    func request<T: Decodable> (dataType: T.Type, completion: @escaping (Result<T,AFError>) -> Void) {
        decoder.keyDecodingStrategy = request.decodingStrategy

        guard let url = request.url() else {
            return
        }

        AF.request(url, method: request.httpMethod)
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
