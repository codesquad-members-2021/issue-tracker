package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.Milestone;
import team02.issue_tracker.dto.CommentResponse;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class DetailIssueResponse extends AbstractIssueResponse {

    private DetailIssueMilestoneResponse milestone;
    private List<CommentResponse> comments;

    public DetailIssueResponse(Issue issue, Long totalIssueCountInMilestone, Long openIssueCountInMilestone) {
        super(issue);
        this.milestone = toMilestoneDetailResponse(issue.getMilestone(), totalIssueCountInMilestone, openIssueCountInMilestone);
        this.comments = issue.getComments().stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());
    }

    private DetailIssueMilestoneResponse toMilestoneDetailResponse(Milestone milestone, Long totalIssueCount, Long openIssueCount) {
        if (milestone == null) {
            return null;
        }
        return new DetailIssueMilestoneResponse(milestone, totalIssueCount, openIssueCount);
    }
}
