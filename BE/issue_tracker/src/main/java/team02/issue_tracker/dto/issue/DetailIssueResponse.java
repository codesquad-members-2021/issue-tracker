package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.Milestone;
import team02.issue_tracker.dto.CommentResponse;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Getter
public class DetailIssueResponse extends AbstractIssueResponse {

    private Optional<DetailIssueMilestoneResponse> milestone;
    private List<CommentResponse> comments;

    public DetailIssueResponse(Issue issue) {
        super(issue);
        this.milestone = toMilestoneDetailResponse(issue.getMilestone());
        this.comments = issue.getComments().stream()
                .filter(comment -> !comment.isDeleted())
                .map(CommentResponse::new)
                .collect(Collectors.toList());
    }

    private Optional<DetailIssueMilestoneResponse> toMilestoneDetailResponse(Milestone milestone) {
        if (milestone == null) {
            return Optional.empty();
        }
        return Optional.of(new DetailIssueMilestoneResponse(milestone));
    }
}
