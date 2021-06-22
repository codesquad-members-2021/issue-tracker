package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.User;

@Getter
public class CommentRequest {

    private String content;
    private String file;

    public Comment toComment(User writer) {
        return new Comment(content, file, writer);
    }
}
