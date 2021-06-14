//
//  AppleLoginManagerDelegate.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import Foundation

protocol SocialLoginManagerDelegate: AnyObject {
    func didSocialLoginSuccess(with loginInfo: LoginInfo)
    func didSocialLoginFail(with error: LoginError)
}
