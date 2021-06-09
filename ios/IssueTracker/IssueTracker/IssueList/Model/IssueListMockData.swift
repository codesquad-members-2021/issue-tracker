//
//  IssueListMockData.swift
//  IssueTracker
//
//  Created by 지북 on 2021/06/09.
//

import Foundation

struct IssueListMock {
    static var data: [Issue] {
        [IssueMock.firstData, IssueMock.secondData, IssueMock.thirdData]
    }
}

struct IssueMock {
    static var firstData: Issue {
        .init(id: 1, number: 1, title: "[iOS] 이슈 목록 테이블 뷰 및 편집 기능", description: " 테이블뷰 코딩, 테이블뷰 배경 투명하게 만들기 ", isOpened: true, isMyCommentExist: false, timeStamp: "2021-06-09T13:35", writer: UserMock.lia, assignees: [UserMock.lia, UserMock.dumba], labels: [LabelMock.iOSLabel,LabelMock.FeatureLabel], milestone: MilestoneMock.iOSFirstData)
    }
    
    static var secondData: Issue {
        .init(id: 2, number: 2, title: "[iOS] 이슈목록 Model 및 Mock Data 생성", description: "이슈목록 Model 구조 설계 및 구현 ( Struct 예정 ) 그에 따른 Mock Data 및 외부 주입성 부여", isOpened: true, isMyCommentExist: true, timeStamp: "2021-06-09T14:14", writer: UserMock.dumba, assignees: [UserMock.lia, UserMock.dumba], labels: [LabelMock.iOSLabel,LabelMock.FeatureLabel], milestone: MilestoneMock.iOSFirstData)
    }
    
    static var thirdData: Issue {
        .init(id: 3, number: 3, title: "[FE] recoil 틀 만들기", description: "codesandbox에서 recoil을 만들어보았다", isOpened: true, isMyCommentExist: false, timeStamp: "2021-06-09T14:20", writer: UserMock.beemo, assignees: [UserMock.beemo], labels: [LabelMock.FELabel, LabelMock.FeatureLabel], milestone: MilestoneMock.feFirstData
        )
    }
}

struct UserMock {
    static var lia: User {
        return .init(id: 1, name: "Lia", imageURL: "https://avatars.githubusercontent.com/u/73650994?v=4")
    }
    
    static var dumba: User {
        return .init(id: 2, name: "Dumba", imageURL: "https://avatars.githubusercontent.com/u/41679458?v=4")
    }
    
    static var beemo: User {
        .init(id: 3, name: "Beemo", imageURL: "https://avatars.githubusercontent.com/u/61257242?v=4")
    }
    
    static var hiro: User {
        .init(id: 4, name: "Hiro", imageURL: "https://avatars.githubusercontent.com/u/61966527?v=4")
    }
    
    static var freddie: User {
        .init(id: 5, name: "Freddie", imageURL: "https://avatars.githubusercontent.com/u/24666330?v=4")
    }
}

struct LabelMock {
    static var iOSLabel: Label {
        .init(id: 1, name: "iOS", description: "For iOS", color: "#9C611A")
    }
    
    static var FELabel: Label {
        .init(id: 2, name: "FE", description: "For FrontEnd", color: "#3EFC68")
    }
    
    static var BELabel: Label {
        .init(id: 3, name: "BE", description: "FOr BackEnd", color: "#1679CF")
    }
    
    static var FeatureLabel: Label {
        .init(id: 4, name: "feature", description: "새로운 기능 추가", color: "#205C65")
    }
}

struct MilestoneMock {
    static var iOSFirstData: Milestone {
        .init(id: 1, name: "[iOS] 이슈 목록 화면", description: "이슈 목록 가져오기 제목, 설명, 마일스톤, 설명은 2줄까지만 표시 이슈를 선택하면 선택한 이슈에 대한 상세 화면으로 이동한다.", isOpend: true, openedIssueCount: 2, closedIssueCount: 2)
    }
    
    static var feFirstData: Milestone {
        .init(id: 2, name: "[FE] 로그인 페이지", description: "OAuth를 활용하여 GitHub 로그인을 가능케 하여 서비스를 이용할 수 있게 한다.", isOpend: true, openedIssueCount: 5, closedIssueCount: 1)
    }
}

