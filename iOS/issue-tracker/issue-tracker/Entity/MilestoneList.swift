import Foundation

struct MilestoneList {
    
    let Milestones: [DetailMilestone]
    
}

struct DetailMilestone {
    
    let id: Int
    let title: String
    let content: String
    let dueDate: String
    let openIssue: Int
    let closeIssue: Int
    
    func completePercent() -> Int {
        let total = openIssue + closeIssue
        return total == 0 ? 0 : openIssue / (openIssue + closeIssue)
    }
    
}
