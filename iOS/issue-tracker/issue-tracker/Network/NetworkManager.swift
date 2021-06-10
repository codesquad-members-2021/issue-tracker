//
//  NetworkManager.swift
//  issue-tracker
//
//  Created by jinseo park on 6/9/21.
//

import Foundation
import Alamofire
import KeychainAccess

protocol NetworkManagerOperations {
    func setInfoGithub<T: Decodable>(with code: String, completion: @escaping (Result<T,Error>) -> Void)
}

class NetworkManager: NetworkManagerOperations {
    let keychain = Keychain()
    
    func setInfoGithub<T: Decodable>(with code: String, completion: @escaping (Result<T, Error>) -> Void) {
        
        guard let url = keychain["github_JWT_URL"] else { return }        
        let param: Parameters = [
            "code" : code
        ]
        AF.request(url, method: .get, parameters: param)
            .responseDecodable(of: T.self) { response in
                switch response.result {
                case .success(let data):
                    completion(.success(data))
                case .failure(let error):
                    print(error.localizedDescription)
                }
            }
    }
}
