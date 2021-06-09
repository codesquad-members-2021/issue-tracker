package com.codesquad.issuetracker.request;

import java.time.LocalDate;

public class CommentRequest {

    private String userId;
    private Long issueId;
    private String content;
    private LocalDate createdAt;

    public CommentRequest(String userId, Long issueId, String content, LocalDate createdAt) {
        this.userId = userId;
        this.issueId = issueId;
        this.content = content;
        this.createdAt = createdAt;
    }

    public String getUserId() {
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
