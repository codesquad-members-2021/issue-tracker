//
//  GithubLoginManagerDelegate.swift
//  issue-tracker
//
//  Created by jinseo park on 6/10/21.
//

import Foundation

protocol GithubLoginManagerDelegate: AnyObject {
    func didGithubLoginSuccess(with loginInfo: LoginInfo)
    func didGithubLoginFail(with error: Error)
}
