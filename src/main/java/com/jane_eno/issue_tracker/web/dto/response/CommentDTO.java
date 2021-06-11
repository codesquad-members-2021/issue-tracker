package com.jane_eno.issue_tracker.web.dto.response;

import com.jane_eno.issue_tracker.domain.comment.Comment;
import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Builder;
import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class CommentDTO {

    private final Long id;
    private final String userName;
    private final String comment;
    private final LocalDateTime createdDateTime;
    private final boolean isOwner;
    private final boolean isAuthor;

    public static CommentDTO createCommentDTO(User loginUser, Issue issue, Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .userName(comment.getAuthorName())
                .comment(comment.getComment())
                .createdDateTime(comment.getCreatedDateTime())
                .isOwner(comment.matchAuthor(issue.getAuthor()))
                .isAuthor(comment.matchAuthor(loginUser))
                .build();
    }
}
