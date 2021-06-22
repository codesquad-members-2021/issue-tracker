import Foundation

struct IssueList {
    
    let issues: [Issue]
    
}

struct Issue {
    
    let id: Int
    let title: String
    let createdTime: String
    let isOpen: Bool
    let writer: Writer
    let assignees: [Writer]
    let milestone: Milestone
    let labels: [Label]
    
}

struct Writer {
    
    let id: Int
    let username: String
    let profileImage: String
    
}

struct Milestone {
    
    let id: Int
    let title: String
    
}

struct Label {
    
    let id: Int
    let title: String
    let color: String
    
}
