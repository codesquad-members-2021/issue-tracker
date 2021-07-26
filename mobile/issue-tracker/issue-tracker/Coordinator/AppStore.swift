//
//  AppStore.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/26.
//

import Foundation
import Combine
import KeychainSwift

final class AppStore {

    struct State {
        var token: TokenAction = .initial
    }

    struct Reducer {
        func reduce(action: TokenAction, state: inout State) {
            switch action {
            case .initial:
                state.token = (KeychainSwift().get("token")?.isEmpty ?? true) ? .empty : .existent
            case .empty:
                state.token = .empty
            case .completed, .existent:
                state.token = .existent
            }
        }
    }

    private var reducer: Reducer {
        return Reducer()
    }

    @Published private(set) var state: State
    private var cancellable: AnyCancellable?

    var updateState: ((AppCoordinator.TokenState) -> Void)?

    init(state: State) {
        self.state = state
        cancellable = $state.sink(receiveValue: { [weak self] state in
            self?.updateState?(AppCoordinator.TokenState(token: state.token))
        })
    }

    func dispatch(_ action: TokenAction) {
        reducer.reduce(action: action, state: &state)
    }
}
