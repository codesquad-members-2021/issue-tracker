package com.codesquad.issuetracker.domain.comment.request;

import com.codesquad.issuetracker.domain.comment.Comment;
import com.codesquad.issuetracker.domain.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommentRequest {

    @JsonProperty("issue_id")
    private Long issueId;

    private String content;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "YYYY-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    public CommentRequest(Long issueId, String content) {
        this.issueId = issueId;
        this.content = content;
        this.createdAt = LocalDateTime.now();
    }

    public Comment create(User user) {
        return Comment.create(null, content, createdAt, issueId, user);
    }
}
