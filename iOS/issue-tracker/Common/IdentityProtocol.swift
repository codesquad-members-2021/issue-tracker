//
//  IdentityProtocol.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/09.
//

import Foundation

protocol NibIdentity {
    static var nibName: String { get }
}

extension NibIdentity {
    static var nibName: String {
        return String(describing: Self.self)
    }
}

protocol ReuseIdentity {
    static var reuseIdentifier: String { get }
}

extension ReuseIdentity {
    static var reuseIdentifier: String {
        return String(describing: Self.self)
    }
}

