//
//  AuthManager.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/08.
//

import Foundation
import AuthenticationServices

class OAuthManager {
    private let cliendId = ""
    private lazy var authURL = URL(string: "https://github.com/login/oauth/authorize?client_id=\(cliendId)&scope=user:email")!
    private let callbackUrlScheme = "issueTracker"

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
            print(code)
            self.requestJWTToken(with: code)
        })
        return authenticationSession
    }

    private func requestJWTToken(with code: String) {
        let query = URLQueryItem(name: "code", value: code)
        let endpoint = Endpoint(path: .login)
        guard let url = endpoint.url(queryItems: [query]) else { return }
        networkManager.request(url: url, decodableType: [String: String].self) { (token) in
            UserDefaults.standard.set(token, forKey: "token")
        }
    }
}
