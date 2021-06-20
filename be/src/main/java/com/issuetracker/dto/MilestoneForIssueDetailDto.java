package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MilestoneForIssueDetailDto {
    private String title;

    @JsonProperty("opened_issue_count")
    private Integer openedIssueCount;

    @JsonProperty("closed_issue_count")
    private Integer closedIssueCount;

    public MilestoneForIssueDetailDto(String title, Integer openedIssueCount, Integer closedIssueCount) {
        this.title = title;
        this.openedIssueCount = openedIssueCount;
        this.closedIssueCount = closedIssueCount;
    }

    public static MilestoneForIssueDetailDto of(String title, Integer openedIssueCount, Integer closedIssueCount) {
        return new MilestoneForIssueDetailDto(
                title,
                openedIssueCount,
                closedIssueCount
        );
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
