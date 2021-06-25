import Foundation

struct MilestoneListResponseDTO: Decodable {
    
    let data: [MilestoneDTO]
    let error: String?
    
    func toDomain() -> MilestoneList {
        return .init(Milestones: data.map { DetailMilestone(id: $0.id, title: $0.title, content: $0.content ?? EmptyCase.content.description, dueDate: $0.dueDate ?? EmptyCase.dueDate.description, openIssue: $0.openIssue ?? 0, closeIssue: $0.closeIssue ?? 0) })
    }
    
}

enum EmptyCase: CustomStringConvertible {
    
    case content
    case dueDate
    
    var description: String {
        switch self {
        case .content:
            return "No description"
        case .dueDate:
            return "No due date"
        }
    }
    
}
