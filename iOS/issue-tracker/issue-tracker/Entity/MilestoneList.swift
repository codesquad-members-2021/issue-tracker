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
    let closedIssue: Int
    
    func completePercent() -> Int {
        let total = openIssue + closedIssue
        return total == 0 ? 0 : Int((Float(closedIssue) / Float(total)) * 100)
    }
    
}
