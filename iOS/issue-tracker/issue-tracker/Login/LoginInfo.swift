//
//  LoginInfo.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import Foundation

struct LoginInfo: Codable {
    let token: Data
    let name: String
}
