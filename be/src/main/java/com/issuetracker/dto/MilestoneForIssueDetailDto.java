package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MilestoneForIssueDetailDto {
    private Long id;

    private String title;

    @JsonProperty("opened_issue_count")
    private Integer openedIssueCount;

    @JsonProperty("closed_issue_count")
    private Integer closedIssueCount;

    public MilestoneForIssueDetailDto(Long id, String title, Integer openedIssueCount, Integer closedIssueCount) {
        this.id = id;
        this.title = title;
        this.openedIssueCount = openedIssueCount;
        this.closedIssueCount = closedIssueCount;
    }

    public static MilestoneForIssueDetailDto of(Long id, String title, Integer openedIssueCount, Integer closedIssueCount) {
        return new MilestoneForIssueDetailDto(
                id,
                title,
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

    public Integer getOpenedIssueCount() {
        return openedIssueCount;
    }

    public Integer getClosedIssueCount() {
        return closedIssueCount;
    }
}
