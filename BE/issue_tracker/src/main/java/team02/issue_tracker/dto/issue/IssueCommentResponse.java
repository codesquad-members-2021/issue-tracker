package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Comment;

@Getter
public class IssueCommentResponse {

    private String content;

    public IssueCommentResponse(Comment comment) {
        this.content = comment.getContent();
    }
}
