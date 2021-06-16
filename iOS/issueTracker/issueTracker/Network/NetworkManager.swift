//
//  NetworkManager.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/14.
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

final class NetworkManager {
    
    private let localAF: SessionProtocol
    
    init(localAF: SessionProtocol) {
        self.localAF = localAF
    }
    
    func request<T: Decodable> (with request: Requestable,
                                type: T.Type,
                                completion: @escaping (Result<T, AFError>) -> Void) {
        
        guard let url = request.url else {
            let networkErrorDescription = NetworkError.url(description: ("Couldn't Create URL"))
            completion(.failure(AFError.createURLRequestFailed(error: networkErrorDescription)))
            return
        }
        
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = request.decodingStrategy
        self.localAF.request(url,
                             method: .get,
                             parameters: nil,
                             encoding: URLEncoding.default,
                             headers: nil,
                             interceptor: nil,
                             requestModifier: nil)
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
    
    static func requestLocal<T: Decodable> (with request: Requestable,
                                            type: T.Type,
                                            completion: @escaping (Result<T, AFError>) -> Void) {
        
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = request.decodingStrategy
        AF.request(request.localurl, method: request.httpMethod)
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
