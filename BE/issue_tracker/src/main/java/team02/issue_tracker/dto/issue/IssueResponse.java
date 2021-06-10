package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.dto.MilestoneResponse;

@Getter
public class IssueResponse extends AbstractIssueResponse {

    private MilestoneResponse milestone;

    public IssueResponse(Issue issue) {
        super(issue);
        this.milestone = new MilestoneResponse(issue.getMilestone());
    }
}
