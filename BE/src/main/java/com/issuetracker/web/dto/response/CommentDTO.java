package com.issuetracker.web.dto.response;

import com.issuetracker.domain.comment.Comment;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Builder;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class CommentDTO {

    private final Long id;
    private final String userName;
    private final String comment;
    private final LocalDateTime createdDateTime;
    private final String avatarUrl;
    private final boolean isOwner;
    private final boolean isAuthor;

    public static CommentDTO createCommentDTO(User loginUser, Issue issue, Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .userName(comment.getAuthorName())
                .comment(comment.getComment())
                .createdDateTime(comment.getCreatedDateTime())
                .avatarUrl(comment.getAuthorAvatarUrl())
                .isOwner(comment.matchAuthor(issue.getAuthor()))
                .isAuthor(comment.matchAuthor(loginUser))
                .build();
    }
}
