import Foundation

struct IssueIDsDTO: Encodable {
    
    let issueIds: [Int]
    
    enum CodingKeys: String, CodingKey {
        case issueIds = "issue_ids"
    }
    
}
