package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.dto.CommentResponse;
import team02.issue_tracker.dto.MilestoneDetailResponse;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class DetailIssueResponse extends AbstractIssueResponse {

    private MilestoneDetailResponse milestone;
    private List<CommentResponse> comments;

    public DetailIssueResponse(Issue issue) {
        super(issue);
        this.milestone = new MilestoneDetailResponse(issue.getMilestone());
        this.comments = issue.getComments().stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());
    }
}
