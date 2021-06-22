package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.Milestone;

@Getter
public class IssueResponse extends AbstractIssueResponse {

    private IssueMilestoneResponse milestone;

    public IssueResponse(Issue issue) {
        super(issue);
        this.milestone = toMilestoneResponse(issue.getMilestone());
    }

    private IssueMilestoneResponse toMilestoneResponse(Milestone milestone) {
        if (milestone == null) {
            return null;
        }
        return new IssueMilestoneResponse(milestone);
    }
}
