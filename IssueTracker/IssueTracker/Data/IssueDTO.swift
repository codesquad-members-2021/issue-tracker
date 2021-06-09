import Foundation

struct IssueDTO: Decodable {
    let count: Count
    let issues: [Issue]
}

struct Count: Decodable {
    let label:Int
    let milestone:Int
    let openedIssue:Int
    let closedIssue:Int
}

struct Issue: Equatable, Decodable {
    let id:Int
    let title:String
    let comment:String
    let author:String
    let createdDateTime:String
    let commentNumber:Int
    let assignees:[String]
    let labels:[String]
    let milestone:String
}
