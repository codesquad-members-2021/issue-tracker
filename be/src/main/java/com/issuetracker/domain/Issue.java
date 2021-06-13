package com.issuetracker.domain;

import java.time.LocalDateTime;

public class Issue {
    private Long id;
    private String title;
    private String description;
    private Long assignee;
    private LocalDateTime createdTime;
    private boolean closed;
    private boolean deleted;
    private Long milestoneId;
    private Long authorUserId;
    private Long number;

    public Issue() {
    }

    public Issue(Long id, String title, String description, Long assignee, LocalDateTime createdTime, boolean closed, boolean deleted, Long milestoneId, Long authorUserId, Long number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.createdTime = createdTime;
        this.closed = closed;
        this.deleted = deleted;
        this.milestoneId = milestoneId;
        this.authorUserId = authorUserId;
        this.number = number;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getAssignee() {
        return assignee;
    }

    public void setAssignee(Long assignee) {
        this.assignee = assignee;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }

    public boolean isClosed() {
        return closed;
    }

    public void setClosed(boolean closed) {
        this.closed = closed;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Long getMilestoneId() {
        return milestoneId;
    }

    public void setMilestoneId(Long milestoneId) {
        this.milestoneId = milestoneId;
    }

    public Long getAuthorUserId() {
        return authorUserId;
    }

    public void setAuthorUserId(Long authorUserId) {
        this.authorUserId = authorUserId;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }
}
