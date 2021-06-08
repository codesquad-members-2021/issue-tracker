package com.codesquad.issuetracker.domain;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Comment {

    @Id
    private final Long id;
    private String content;
    private final LocalDateTime createdAt;
    private final Long issueId;
    private final Long userId;

    private Comment(Long id, String content, LocalDateTime createdAt, Long issueId, Long userId) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
        this.issueId = issueId;
        this.userId = userId;
    }

    public Comment create(Long id, String content, LocalDateTime createdAt, Long issueId, Long userId) {
        return new Comment(id, content, createdAt, issueId, userId);
    }
}
