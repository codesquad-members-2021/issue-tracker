//
//  AppleLoginManagerDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import Foundation

protocol AppleLoginManagerDelegate: AnyObject {
    func didAppleLoginSuccess(with loginInfo: LoginInfo)
    func didAppleLoginFail(with error: Error)
}
