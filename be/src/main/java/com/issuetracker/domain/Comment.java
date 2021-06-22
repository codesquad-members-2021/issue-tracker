package com.issuetracker.domain;

import java.time.LocalDateTime;

public class Comment {

    private Long id;
    private String description;
    private LocalDateTime createdTime;
    private Long issueId;
    private Long userId;

    public Comment(){

    }

    public Comment(Long id, String description, LocalDateTime createdTime, Long issueId, Long userId) {
        this.id = id;
        this.description = description;
        this.createdTime = createdTime;
        this.issueId = issueId;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }

    public Long getIssueId() {
        return issueId;
    }

    public void setIssueId(Long issueId) {
        this.issueId = issueId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
