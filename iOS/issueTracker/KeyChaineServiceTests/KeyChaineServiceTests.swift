//
//  KeyChaineServiceTests.swift
//  KeyChaineServiceTests
//
//  Created by 오킹 on 2021/06/16.
//

import XCTest

class KeyChaineServiceTests: XCTestCase {

    private var keyChaine = KeyChainService.shared
    private var user = User(profileImage: "이미지", userName: "이름", userId: 1, jwtToken: "토큰")
    private var changedUser = User(profileImage: "바뀐이미지", userName: "바뀐이름", userId: 1, jwtToken: "바뀐토큰")
    
    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func test_깃허브_키체인_저장조회수정삭제_시나리오() throws {
        // 생성
        XCTAssertEqual(keyChaine.createUser(user, service: .gitHub), true)
        // 조회
        XCTAssertEqual(keyChaine.readUser(service: .gitHub), user)
        // 수정
        XCTAssertTrue(keyChaine.updateUser(changedUser, service: .gitHub))
        XCTAssertEqual(keyChaine.readUser(service: .gitHub), changedUser)
        // 삭제
        XCTAssertTrue(keyChaine.deleteUser(service: .gitHub))
        XCTAssertNil(keyChaine.readUser(service: .gitHub))
    }

}
