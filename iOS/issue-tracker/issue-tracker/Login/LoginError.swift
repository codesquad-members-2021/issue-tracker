//
//  LoginError.swift
//  issue-tracker
//
//  Created by Song on 2021/06/10.
//

import Foundation

enum LoginError: Error {
    case githubIDAccess
    case appleIDAccess
    case keyChainSave
    case logout
}

extension LoginError: CustomStringConvertible {
    var description: String {
        switch self {
        case .githubIDAccess:
            return "깃허브 로그인에 실패했습니다. \n다른 로그인 방식을 선택해주세요."
        case .appleIDAccess:
            return "애플 로그인에 실패했습니다. \n다른 로그인 방식을 선택해주세요."
        case .keyChainSave:
            return "로그인 정보 저장에 실패했습니다. \n로그인을 다시 시도해주세요."
        case .logout:
            return "로그아웃 기능은 제공되지 않습니다🥺"
        }
    }
}
