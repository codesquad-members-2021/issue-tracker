//
//  NetworkManager.swift
//  issue-tracker
//
//  Created by jinseo park on 6/9/21.
//

import Foundation
import Alamofire

protocol NetworkManagerOperations {
    func setInfoGithub<T: Decodable>(with code: String, completion: @escaping (Result<T,Error>) -> Void)
}

class NetworkManager: NetworkManagerOperations {
    
    let accessTokenURL = "http://3.34.122.67/api/login/ios"
    
    func setInfoGithub<T: Decodable>(with code: String, completion: @escaping (Result<T, Error>) -> Void) {
            
        let param: Parameters = [
            "code" : code
        ]
        
        AF.request(accessTokenURL, method: .get, parameters: param)
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
