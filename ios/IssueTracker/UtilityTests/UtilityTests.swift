//
//  UtilityTests.swift
//  UtilityTests
//
//  Created by Lia on 2021/06/10.
//

import XCTest

class UtilityTests: XCTestCase {

    /// color space 차이 및 Float 나눗셈 결과 차이로 비교 불가
    /// 테스트 케이스 실패로 완벽하게 원하는 결과 색이 안 나온 것을 확인함
    func test_헥사투컬러_변환() {
        XCTAssertTrue(UIColor.hexToUIColor(hex: "#FD8D0E").cgColor.components == UIColor.systemOrange.cgColor.components, "hex to UIColor 오렌지 색 실패")
        XCTAssertTrue(UIColor.hexToUIColor(hex: "#106BFF") == UIColor.systemBlue, "hex to UIColor 블루 색 실패")
        XCTAssertTrue(UIColor.hexToUIColor(hex: "#FFFFFF") == UIColor.white, "hex to UIColor 화이트 색 실패")
    }

}
