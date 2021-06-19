//
//  NetworkManager.swift
//  issue-tracker
//
//  Created by jinseo park on 6/9/21.
//

import Foundation
import Alamofire

protocol NetworkManagerOperations {
    func get<T: Decodable>(endpoint: String, queryParameters: [String: Any]?, completion: @escaping (Result<T, NetworkError>) -> Void)
    func delete(endpoint: String, queryParameters: [String: Any]?, completion: @escaping (Result<Void, NetworkError>) -> Void)
    func post<T: Encodable>(endpoint: String, requestBody: T, completion: @escaping (Result<Void, NetworkError>) -> Void)
    func put<T: Encodable>(endpoint: String, requestBody: T, completion: @escaping (Result<Void, NetworkError>) -> Void)
}

final class NetworkManager: NetworkManagerOperations {
    
    private let requestManager: RequestManager
    
    init(baseAddress: String, headers: [String: String]? = nil) {
        let requestManager = RequestManager(baseAddress: baseAddress, headers: headers)
        self.requestManager = requestManager
    }

    func get<T: Decodable>(endpoint: String, queryParameters: [String: Any]?, completion: @escaping (Result<T, NetworkError>) -> Void) {
        let request = requestManager.create(endpoint: endpoint, method: .get, queryParameters: queryParameters)
        
        request.responseDecodable(of: T.self) { [weak self] response in
                switch response.result {
                case .success(let data):
                    completion(.success(data))
                case .failure(_):
                    let statusCode = response.response?.statusCode
                    let error = self?.networkError(for: statusCode) ?? NetworkError.unknown
                    completion(.failure(error))
                }
        }
    }
    
    func delete(endpoint: String, queryParameters: [String: Any]?, completion: @escaping (Result<Void, NetworkError>) -> Void) {
        let request = requestManager.create(endpoint: endpoint, method: .delete, queryParameters: queryParameters)
        executeVoidRequest(request: request, completion: completion)
    }
    
    func post<T: Encodable>(endpoint: String, requestBody: T, completion: @escaping (Result<Void, NetworkError>) -> Void) {
        let request = requestManager.create(endpoint: endpoint, method: .post, encodableParameters: requestBody)
        executeVoidRequest(request: request, completion: completion)
    }
    
    func put<T: Encodable>(endpoint: String, requestBody: T, completion: @escaping (Result<Void, NetworkError>) -> Void) {
        let request = requestManager.create(endpoint: endpoint, method: .put, encodableParameters: requestBody)
        executeVoidRequest(request: request, completion: completion)
    }
    
    private func executeVoidRequest(request: DataRequest, completion: @escaping (Result<Void, NetworkError>) -> Void) {
        request.response { [weak self] response in
                switch response.result {
                case .success(_):
                    completion(.success(()))
                case .failure(_):
                    let statusCode = response.response?.statusCode
                    let error = self?.networkError(for: statusCode) ?? NetworkError.unknown
                    completion(.failure(error))
                }
        }
    }
    
    private func networkError(for statusCode: Int?) -> NetworkError {
        guard let statusCode = statusCode else { return NetworkError.internet }
        
        switch statusCode {
        case 300..<400:
            return NetworkError.noResult
        case 400..<500:
            return NetworkError.notAllowed
        case 500...:
            return NetworkError.server
        default:
            return NetworkError.unknown
        }
    }
}
