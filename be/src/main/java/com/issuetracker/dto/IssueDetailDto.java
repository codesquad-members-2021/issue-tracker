package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Issue;

import java.time.LocalDateTime;
import java.util.List;

public class IssueDetailDto {
    private String title;
    private String description;
    private Long assignee;

    @JsonProperty("created_time")
    private LocalDateTime createdTime;

    private boolean closed;
    private MilestoneForIssueDetailDto milestone;

    @JsonProperty("author_user_id")
    private Long authorUserId;

    @JsonProperty("issue_number")
    private Long issueNumber;

    @JsonProperty("label_list")
    private List<LabelForIssueDetailDto> labelList;

    public IssueDetailDto(String title, String description, Long assignee, LocalDateTime createdTime, boolean closed, MilestoneForIssueDetailDto milestone, Long authorUserId, Long issueNumber, List<LabelForIssueDetailDto> labelList) {
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.createdTime = createdTime;
        this.closed = closed;
        this.milestone = milestone;
        this.authorUserId = authorUserId;
        this.issueNumber = issueNumber;
        this.labelList = labelList;
    }

    public static IssueDetailDto of(Issue issue, MilestoneForIssueDetailDto milestone, List<LabelForIssueDetailDto> labelList) {
        return new IssueDetailDto(
                issue.getTitle(),
                issue.getDescription(),
                issue.getAssignee(),
                issue.getCreatedTime(),
                issue.isClosed(),
                milestone,
                issue.getAuthorUserId(),
                issue.getNumber(),
                labelList
        );
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Long getAssignee() {
        return assignee;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public boolean isClosed() {
        return closed;
    }

    public MilestoneForIssueDetailDto getMilestone() {
        return milestone;
    }

    public Long getAuthorUserId() {
        return authorUserId;
    }

    public Long getIssueNumber() {
        return issueNumber;
    }

    public List<LabelForIssueDetailDto> getLabelList() {
        return labelList;
    }
}
