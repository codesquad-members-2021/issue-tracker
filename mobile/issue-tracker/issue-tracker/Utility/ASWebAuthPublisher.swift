//
//  ASWebAuthPublisher.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/21.
//

import Foundation
import Combine
import AuthenticationServices

extension ASWebAuthenticationSession {
    static func publisher(url: URL,
                          sheme: String,
                          context: ASWebAuthenticationPresentationContextProviding) -> ASWebAuthPublisher {
        return ASWebAuthPublisher(url: url,
                                  scheme: sheme,
                                  context: context)
    }
}

struct ASWebAuthPublisher: Publisher {

    typealias Output = String
    typealias Failure = NetworkError
    typealias Context = ASWebAuthenticationPresentationContextProviding

    let url: URL
    let scheme: String
    let context: Context

    func receive<S>(subscriber: S) where S: Subscriber,
                                         Self.Failure == S.Failure,
                                         Self.Output == S.Input {
        let subscription = ASWebAuthSubscription(url: url,
                                                 scheme: scheme,
                                                 context: context,
                                                 subscriber: subscriber)
        subscriber.receive(subscription: subscription)
    }
}

final class ASWebAuthSubscription<S: Subscriber>: Subscription where S.Input == String,
                                                                     S.Failure == NetworkError {

    typealias Context = ASWebAuthenticationPresentationContextProviding

    private var subscriber: S?
    private var webAuthSession: ASWebAuthenticationSession?
    private let url: URL
    private let scheme: String
    private var context: Context

    init(url: URL,
         scheme: String,
         context: Context,
         subscriber: S) {
        self.url = url
        self.scheme = scheme
        self.context = context
        self.subscriber = subscriber
        requestGithubCode()
    }

    func request(_ demand: Subscribers.Demand) {}

    func cancel() {
        subscriber = nil
    }

    private func requestGithubCode() {
        guard let subscriber = subscriber else { return }
        webAuthSession = ASWebAuthenticationSession(url: url,
                                                    callbackURLScheme: scheme) { (callbackURL: URL?, error: Error?) in
            guard error == nil, let successURL = callbackURL else {
                subscriber.receive(completion: .failure(NetworkError.failedAuthentication))
                return
            }

            let queryItems = URLComponents(string: successURL.absoluteString)?.queryItems
            let code = queryItems?.filter { $0.name == "code" }.first?.value ?? ""
            _ = subscriber.receive(code)
            subscriber.receive(completion: .finished)
        }
        webAuthSession?.presentationContextProvider = context
        webAuthSession?.start()
    }
 }
