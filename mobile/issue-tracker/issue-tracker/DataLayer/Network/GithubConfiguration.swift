//
//  Endpoint.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import Foundation

struct GithubConfiguration {
    private let scheme = "https"
    private let host = "github.com"
    private let path = "/login/oauth/authorize"
    private let query = "6cd127b711edc7a10a5c"

    func url() -> URL? {
        var component = URLComponents()
        component.scheme = scheme
        component.host = host
        component.path = path
        component.queryItems = [URLQueryItem(name: "client_id", value: query)]
        return component.url
    }
}
