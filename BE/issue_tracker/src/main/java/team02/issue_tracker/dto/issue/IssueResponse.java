package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.Milestone;

@Getter
public class IssueResponse extends AbstractIssueResponse {

    private IssueMilestoneResponse milestone;
    private IssueCommentResponse firstComment;

    public IssueResponse(Issue issue, Comment comment) {
        super(issue);
        this.milestone = toMilestoneResponse(issue.getMilestone());
        this.firstComment = toCommentResponse(comment);
    }

    private IssueMilestoneResponse toMilestoneResponse(Milestone milestone) {
        if (milestone == null) {
            return null;
        }
        return new IssueMilestoneResponse(milestone);
    }

    private IssueCommentResponse toCommentResponse(Comment comment) {
        return new IssueCommentResponse(comment);
    }
}
