import Foundation

struct IssueDTO: Decodable {
    let count: Count
    let issues: [IssueInfo]
}

struct Count: Decodable {
    let label:Int
    let milestone:Int
    let openedIssue:Int
    let closedIssue:Int
}

struct IssueInfo: Decodable {
    let id:Int
    let title:String
    let comment:String
    let author:String
    let createdDateTime:String
    let commentNumber:Int
    let assignees:[Assignee]
    let labels:[Label]
    let milestone:String
}
