//
//  LoginInfo.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import Foundation

class LoginInfo {
    static let shared = LoginInfo()
    
    var service: LoginService?
    var userID: String?
    var jwt: JWT?
    var avatarURL: String?
    var name: String?
    
    private init() {}
    
    func store(loginInfoDTO: LoginInfoDTO) {
        userID = loginInfoDTO.userID
        jwt = loginInfoDTO.jwt
        avatarURL = loginInfoDTO.avatarURL
        name = loginInfoDTO.name
    }
    
    func clear() {
        service = nil
        userID = nil
        jwt = nil
        avatarURL = nil
        name = nil
    }
}
