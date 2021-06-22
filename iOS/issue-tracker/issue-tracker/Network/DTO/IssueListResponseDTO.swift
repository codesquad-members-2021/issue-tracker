import Foundation

struct IssueListResponseDTO: Decodable {
    let data: [IssueDTO]
}

struct IssueDTO: Decodable {
    let id: Int
    let title: String
    let createdTime: String
    let isOpen: Bool
    let writer: WriterDTO
    let assignees: [WriterDTO]
    let milestone: MilestoneDTO
    let labels: [LabelDTO]
    
    enum CodingKeys: String, CodingKey {
        case id, title
        case createdTime = "created_time"
        case isOpen = "is_open"
        case writer, assignees, milestone, labels
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
}

struct LabelDTO: Decodable {
    let id: Int
    let title: String
    let color: String
}
