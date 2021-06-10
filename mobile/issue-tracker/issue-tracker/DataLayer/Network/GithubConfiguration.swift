//
//  Endpoint.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import Foundation

enum GithubConfiguration {
    static let scheme = "https"
    static let host = "github.com"
    static let path = "/login/oauth/authorize"

    static func url() -> URL? {
        var componets = URLComponents()
        componets.scheme = GithubConfiguration.scheme
        componets.host = GithubConfiguration.host
        componets.path = GithubConfiguration.path
        componets.queryItems = addQueryItem()
        return componets.url
    }

    private static func addQueryItem() -> [URLQueryItem] {
        guard let filePath = Bundle.main.path(forResource: "ClientId", ofType: "plist") else {
            return []
        }
        let plist = NSDictionary(contentsOfFile: filePath)
        guard let key = plist?.object(forKey: "id") as? String else {
            return []
        }
        return [URLQueryItem(name: "client_id", value: key)]
    }
}
