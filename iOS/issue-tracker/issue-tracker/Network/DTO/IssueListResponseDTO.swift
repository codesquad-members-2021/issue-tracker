import Foundation

struct IssueListResponseDTO: Decodable {
    
    let data: [IssueDTO]
    
}

extension IssueListResponseDTO {
    
    func toDomain() -> IssueList {
        return IssueList(issues: data.map { return Issue(id: $0.id, title: $0.title, comment: $0.firstComment.content, milestone: $0.milestone?.title ?? "", labels: $0.labels.map { $0.toDomain() }) })
    }
    
}

struct IssueDTO: Decodable {
    
    let id: Int
    let title: String
    let createdTime: String
    let isOpen: Bool
    let writer: WriterDTO
    let assignees: [WriterDTO]
    let milestone: MilestoneDTO?
    let labels: [LabelDTO]
    let firstComment: CommentDTO
    
    enum CodingKeys: String, CodingKey {
        case id, title
        case createdTime = "created_time"
        case isOpen = "is_open"
        case writer, assignees, milestone, labels
        case firstComment = "first_comment"
    }
    
}

struct WriterDTO: Decodable {
    
    let id: Int
    let username: String
    let profileImage: String
    
    enum CodingKeys: String, CodingKey {
        case id, username
        case profileImage = "profile_image"
    }
    
}

struct MilestoneDTO: Decodable {
    
    let id: Int
    let title: String
    let content: String?
    let dueDate: String?
    let openIssue: Int?
    let closedIssue: Int?
    
    enum CodingKeys: String, CodingKey {
        case id, title, content
        case dueDate = "due_date"
        case openIssue = "open_issue"
        case closedIssue = "closed_issue"
    }
    
}

struct LabelDTO: Decodable {
    
    let id: Int
    let title: String
    let content: String?
    let color: String
    
    func toDomain() -> Label {
        return .init(title: title, color: color)
    }
}

struct CommentDTO: Decodable {
    
    let content: String
    
}
