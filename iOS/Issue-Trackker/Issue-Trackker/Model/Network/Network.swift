//
//  Network.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/13.
//

import Foundation
import Alamofire

protocol SessionProtocol {
    func request(_ convertible: URLConvertible,
                      method: HTTPMethod,
                      parameters: Parameters?,
                      encoding: ParameterEncoding,
                      headers: HTTPHeaders?,
                      interceptor: RequestInterceptor?,
                      requestModifier: Session.RequestModifier?) -> DataRequest
}

extension Session: SessionProtocol {
    
}

class Network {
    func request<T: Decodable> (with request: Requestable, dataType: T.Type, completion: @escaping (Result<T,AFError>) -> Void) {

        let url = request.url()
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase

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
