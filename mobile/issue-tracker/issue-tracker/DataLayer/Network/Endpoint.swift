//
//  Endpoint.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/10.
//

import Foundation

protocol EndPointGenerator {
    func url(router: URLRouter) -> URL?
    func urlRequest(router: URLRouter, method: Method, body: Data?) -> URLRequest?
}

struct EndPoint: EndPointGenerator {

    func url(router: URLRouter) -> URL? {
        switch router {
        case .auth:
            return baseURL(path: router.path)
        case .issues:
            return baseURL(path: router.path)
        case .github:
            return githubAuthURL()
        }
    }

    private func baseURL(path: String) -> URL? {
        var component = URLComponents()
        component.scheme = "http"
        component.host = "issue-tracker.pyro-squad.com"
        component.port = 8080
        component.path = "/api/web/" + path
        return component.url
    }

    private func githubAuthURL() -> URL? {
        var component = URLComponents()
        component.scheme = "https"
        component.host = "github.com"
        component.path = "/login/oauth/authorize"
        component.queryItems = [URLQueryItem(name: "client_id", value: "6cd127b711edc7a10a5c"),
                                URLQueryItem(name: "scope", value: "user")]
        return component.url
    }

    func urlRequest(router: URLRouter, method: Method = .get, body: Data? = nil) -> URLRequest? {
        guard let url = url(router: router) else {
            return nil
        }
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = method.description
        urlRequest.httpBody = body
        urlRequest.allHTTPHeaderFields = ["Content-Type": "application/json"]
        return urlRequest
    }

}
