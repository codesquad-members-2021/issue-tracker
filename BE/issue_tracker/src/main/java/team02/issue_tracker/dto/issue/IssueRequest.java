package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.User;

import java.util.List;

@Getter
public class IssueRequest {

    private String title;
    private String comment;
    private String file;
    private List<Long> labelIds;
    private Long milestoneId;
    private List<Long> assigneeIds;

    public Issue toIssue(User writer) {
        return new Issue(title, writer, true);
    }

    public Comment toComment(User writer) {
        return new Comment(comment, file, writer);
    }
}
