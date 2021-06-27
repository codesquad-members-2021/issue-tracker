package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Milestone;

import java.time.LocalDate;

public class MilestoneDto {
    private Long id;
    private String title;
    private String description;

    @JsonProperty("due_date")
    private LocalDate dueDate;

    private boolean closed;

    @JsonProperty("opened_issue_count")
    private Integer openedIssueCount;

    @JsonProperty("closed_issue_count")
    private Integer closedIssueCount;

    public MilestoneDto(Long id, String title, String description, LocalDate dueDate, boolean closed, Integer openedIssueCount, Integer closedIssueCount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.closed = closed;
        this.openedIssueCount = openedIssueCount;
        this.closedIssueCount = closedIssueCount;
    }

    public static MilestoneDto of(Milestone milestone, Integer openedIssueCount, Integer closedIssueCount) {
        return new MilestoneDto(
                milestone.getId(),
                milestone.getTitle(),
                milestone.getDescription(),
                milestone.getDueDate(),
                milestone.isClosed(),
                openedIssueCount,
                closedIssueCount
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

    public LocalDate getDueDate() {
        return dueDate;
    }

    public boolean isClosed() {
        return closed;
    }

    public Integer getOpenedIssueCount() {
        return openedIssueCount;
    }

    public Integer getClosedIssueCount() {
        return closedIssueCount;
    }
}
