package com.issuetracker.dto;

public class IssueSearchCondition {
    private Boolean closed;
    private Long author;
    private Long label;
    private Long milestone;
    private Long assignee;

    public Boolean getClosed() {
        return closed;
    }

    public void setClosed(Boolean closed) {
        this.closed = closed;
    }

    public Long getAuthor() {
        return author;
    }

    public void setAuthor(Long author) {
        this.author = author;
    }

    public Long getLabel() {
        return label;
    }

    public void setLabel(Long label) {
        this.label = label;
    }

    public Long getMilestone() {
        return milestone;
    }

    public void setMilestone(Long milestone) {
        this.milestone = milestone;
    }

    public Long getAssignee() {
        return assignee;
    }

    public void setAssignee(Long assignee) {
        this.assignee = assignee;
    }
}
