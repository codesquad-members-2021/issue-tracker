//
//  AuthManager.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/08.
//

import Foundation
import AuthenticationServices

class OAuthManager {
    private let cliendId = "4cccb9b4007d25b53a70"
    private lazy var authURL = URL(string: "https://github.com/login/oauth/authorize?client_id=\(cliendId)")!
    private let callbackUrlScheme = "issue-tracker"
    private var code: String?

    var networkManager: Networkable

    init(networkManager: Networkable) {
        self.networkManager = networkManager
    }

    func authenticate() -> ASWebAuthenticationSession {
        let authenticationSession = ASWebAuthenticationSession.init(url: authURL, callbackURLScheme: callbackUrlScheme, completionHandler: { (callbackURL: URL?, error: Error?) in
            guard error == nil,
                  let callbackURL = callbackURL,
                  let queryItems = URLComponents(string: callbackURL.absoluteString)?.queryItems,
                  let code = queryItems.first(where: { $0.name == "code" })?.value else {
                print("An error occurred when attempting to sign in.")
                return
            }
            self.code = code
            NotificationCenter.default.post(name: Notification.Name.init("authorized"), object: self)
        })
        return authenticationSession
    }

    func requestJWTToken(completion: @escaping () -> Void) {
        let query = URLQueryItem(name: "code", value: code)
        let endpoint = Endpoint(path: .login)
        guard let url = endpoint.url(queryItems: [query]) else { return }
        networkManager.request(url: url, decodableType: Token.self) { data in
            let token = data.data
            UserDefaults.standard.setValue(token, forKey: "token")
            completion()
        }
    }
}

struct Token: Decodable {
    let data: String
}
