//
//  NetworkManager.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/08.
//

import Foundation
import Alamofire

protocol Networkable {
    func request<T: Decodable>(url: URL, decodableType: T.Type, completion: @escaping (T) -> Void)
    func postRequest<T: Encodable>(url: URL, encodable: T, completion: @escaping (Result<Data?, AFError>) -> Void)
    func deleteRequest(url: URL, completion: @escaping (Result<Data?, AFError>) -> Void)
    func patchRequest<T: Encodable>(url: URL, encodable: T, completion: @escaping (Result<Data?, AFError>) -> Void)
}

class NetworkManager: Networkable {
    private lazy var httpHeaders: HTTPHeaders = ["Content-Type": "application/json",
                                            "Accept": "application/json",
                                            "Authorization": getToken()]

    func getToken() -> String {
        guard let token = UserDefaults.standard.string(forKey: "token") else {
            return ""
        }
        return token
    }

    func request<T: Decodable>(url: URL, decodableType: T.Type, completion: @escaping (T) -> Void) {
        AF.request(url, method: .get, headers: httpHeaders)
            .validate(statusCode: 200..<300)
            .responseDecodable(of: decodableType) { (response) in
                switch response.result {
                case .success(let data):
                    completion(data)
                case .failure(let error):
                    print(error)
                }
            }
    }

    func postRequest<T: Encodable>(url: URL, encodable: T, completion: @escaping (Result<Data?, AFError>) -> Void) {
        AF.request(url, method: .post, parameters: encodable, encoder: JSONParameterEncoder.default, headers: httpHeaders)
            .validate(statusCode: 200..<300)
            .response { response in
                completion(response.result)
            }
    }

    func deleteRequest(url: URL, completion: @escaping (Result<Data?, AFError>) -> Void) {
        AF.request(url, method: .delete, headers: httpHeaders)
            .validate(statusCode: 200..<300)
            .response { response in
                completion(response.result)
            }
    }

    func patchRequest<T: Encodable>(url: URL, encodable: T, completion: @escaping (Result<Data?, AFError>) -> Void) {
        AF.request(url, method: .patch, parameters: encodable, encoder: JSONParameterEncoder.default, headers: httpHeaders)
            .validate(statusCode: 200..<300)
            .response { response in
                completion(response.result)
            }
    }
}
