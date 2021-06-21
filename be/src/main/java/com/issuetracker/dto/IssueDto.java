package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;
import com.issuetracker.oauth.User;

import java.time.LocalDateTime;
import java.util.List;

public class IssueDto {
    private Long id;
    private String title;
    private String description;
    private boolean closed;

    private User assignee;
    private User author;

    @JsonProperty("label_list")
    private List<Label> labelList;

    @JsonProperty("issue_number")
    private Long issueNumber;

    @JsonProperty("created_time")
    private LocalDateTime createdTime;

    @JsonProperty("milestone_title")
    private String milestoneTitle;

    public IssueDto(Long id, String title, String description, boolean closed, User assignee, User author, List<Label> labelList, Long issueNumber, LocalDateTime createdTime, String milestoneTitle) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.closed = closed;
        this.assignee = assignee;
        this.author = author;
        this.labelList = labelList;
        this.issueNumber = issueNumber;
        this.createdTime = createdTime;
        this.milestoneTitle = milestoneTitle;
    }

    public IssueDto(Issue issue, String milestoneTitle, User author, User assignee) {
        this.id = issue.getId();
        this.title = issue.getTitle();
        this.description = issue.getDescription();
        this.assignee = assignee;
        this.author = author;
        this.issueNumber = issue.getNumber();
        this.createdTime = issue.getCreatedTime();
        this.milestoneTitle = milestoneTitle;
    }

    public static IssueDto of(Issue issue, String milestoneTitle, List<Label> labels, User author, User assignee) {
        return new IssueDto(
                issue.getId(),
                issue.getTitle(),
                issue.getDescription(),
                issue.isClosed(),
                assignee,
                author,
                labels,
                issue.getNumber(),
                issue.getCreatedTime(),
                milestoneTitle
        );
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public boolean isClosed() {
        return closed;
    }

    public User getAssignee() {
        return assignee;
    }

    public User getAuthor() {
        return author;
    }

    public Long getIssueNumber() {
        return issueNumber;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public String getMilestoneTitle() {
        return milestoneTitle;
    }

    public List<Label> getLabelList() {
        return labelList;
    }

}
