package com.codesquad.issuetracker.request;

import java.time.LocalDate;

public class CommentRequest {

    private Long userId;
    private Long issueId;
    private String content;
    private LocalDate createdAt;

    public CommentRequest(Long userId, Long issueId, String content, LocalDate createdAt) {
        this.userId = userId;
        this.issueId = issueId;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Long getUserId() {
        return userId;
    }

    public Long getIssueId() {
        return issueId;
    }

    public String getContent() {
        return content;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }
}
