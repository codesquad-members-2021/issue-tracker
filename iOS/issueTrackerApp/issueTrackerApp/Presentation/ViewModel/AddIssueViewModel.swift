//
//  AddIssueViewModel.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/14.
//

import Foundation

class AddIssueViewModel {
    //수정해야함!!!!
    var issueTitle = String()
    var comment = String()
    
    var moreInfos: [MoreInfo] {
        return DummyDataLoader.loadDataFromJSONFile(withName: "MoreInfos") ?? []
    }
    
    func updateIssueTitle(_ issueTitle: String) {
        self.issueTitle = issueTitle
    }
    
    func updateComment(_ comment: String) {
        self.comment = comment
    }
}
