package com.issuetracker.domain;

import com.issuetracker.dto.IssueRequestDto;
import com.issuetracker.oauth.User;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class Issue {
    private Long id;
    private String title;
    private String description;
    private Long assignee;
    private Long authorUserId;
    private LocalDateTime createdTime;
    private boolean closed;
    private boolean deleted;
    private Long milestoneId;
    private Long number;
    private List<Label> labels;

    public Issue() {
    }

    public Issue(Long id, String title, String description, Long assignee, LocalDateTime createdTime,
                 boolean closed, boolean deleted, Long milestoneId, Long authorUserId, Long number, List<Label> labels) {
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
        this.labels = labels;
    }

    public void setIssueFromDto(IssueRequestDto requestDto, User author, Long lastNumOfIssue) {
        this.title = requestDto.getTitle();
        this.description = requestDto.getDescription();
        this.assignee = requestDto.getAssignee();
        this.createdTime = LocalDateTime.now();
        this.closed = false;
        this.deleted = false;
        this.milestoneId = requestDto.getMilestoneId();
        this.authorUserId = author.getId();
        //TODO: 추후 변경
        this.number = lastNumOfIssue + 1;
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

    public List<Label> getLabels() {
        return labels;
    }

    public void setLabels(List<Label> labels) {
        this.labels = labels;
    }

    public Map<String, Object> toMap() {
        Map<String, Object> values = new HashMap<>();
        values.put("title", title);
        values.put("description", description);
        values.put("assignee", assignee);
        values.put("created_time", createdTime);
        values.put("closed", closed);
        values.put("deleted", deleted);
        values.put("milestone_id", milestoneId);
        values.put("author_user_id", authorUserId);
        values.put("number", number);

        return values;
    }
}
