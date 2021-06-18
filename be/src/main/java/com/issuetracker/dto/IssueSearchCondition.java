package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssueSearchCondition {
    private Boolean closed;
    private Long authorUserId;
    private Long labelId;
    private Long milestoneId;
    private Long assigneeUserId;

    @JsonProperty("closed")
    public Boolean getClosed() {
        return closed;
    }

    @JsonProperty("author_id")
    public Long getAuthorUserId() {
        return authorUserId;
    }

    @JsonProperty("label_id")
    public Long getLabelId() {
        return labelId;
    }

    @JsonProperty("milestone_id")
    public Long getMilestoneId() {
        return milestoneId;
    }

    @JsonProperty("assignee_id")
    public Long getAssigneeUserId() {
        return assigneeUserId;
    }

    public void setClosed(Boolean closed) {
        this.closed = closed;
    }

    public void setAuthorUserId(Long authorUserId) {
        this.authorUserId = authorUserId;
    }

    public void setLabelId(Long labelId) {
        this.labelId = labelId;
    }

    public void setMilestoneId(Long milestoneId) {
        this.milestoneId = milestoneId;
    }

    public void setAssigneeUserId(Long assigneeUserId) {
        this.assigneeUserId = assigneeUserId;
    }
}
