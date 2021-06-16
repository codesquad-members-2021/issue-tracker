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
}

class NetworkManager: Networkable {
    private let httpHeaders: HTTPHeaders = ["Content-Type": "application/json", "Accept": "application/json"]

    func request<T: Decodable>(url: URL, decodableType: T.Type, completion: @escaping (T) -> Void) {
        AF.request(url, method: .get, encoding: URLEncoding.default, headers: httpHeaders)
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
}


