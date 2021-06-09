import Foundation

struct IssueDTO {
    let count: Count
    let issue: [Issue]
}

struct Count {
    let label:Int
    let milestone:Int
    let openedIssue:Int
    let closedIssue:Int
}

struct Issue {
    let id:Int
    let title:String
    let author:String
    let createdDateTime:String
    let commentNumber:Int
    let assignees:[String]
    let labels:[String]
    let milestone:String
}
