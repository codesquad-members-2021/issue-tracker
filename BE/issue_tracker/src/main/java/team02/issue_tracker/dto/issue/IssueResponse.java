package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.Milestone;

import java.util.Optional;

@Getter
public class IssueResponse extends AbstractIssueResponse {

    private Optional<IssueMilestoneResponse> milestone;

    public IssueResponse(Issue issue) {
        super(issue);
        this.milestone = toMilestoneResponse(issue.getMilestone());
    }

    private Optional<IssueMilestoneResponse> toMilestoneResponse(Milestone milestone) {
        if(milestone == null) {
            return Optional.empty();
        }
        return Optional.of(new IssueMilestoneResponse(milestone));
    }
}
