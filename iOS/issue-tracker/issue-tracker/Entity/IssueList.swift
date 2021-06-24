import Foundation

struct IssueList {
    
    var issues: [Issue]
    
}

struct Issue {
    
    let id: Int
    let title: String
    let comment: String
    let milestone: String
    let labels: [Label]
    
}

struct Label {
    
    let title: String
    let color: String
    
}
