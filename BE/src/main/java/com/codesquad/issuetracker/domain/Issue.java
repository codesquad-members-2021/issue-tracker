package com.codesquad.issuetracker.domain;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Issue {
    @Id
    private final Long id;
    private String title;
    private String content;
    private boolean status;
    private final LocalDateTime createdAt;
    private Long milestoneId;
    private final Long userId;

    private Issue(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, Long userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.milestoneId = milestoneId;
        this.userId = userId;
    }

    public Issue create(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, Long userId) {
        return new Issue(id, title, content, status, createdAt, milestoneId, userId);
    }
}
