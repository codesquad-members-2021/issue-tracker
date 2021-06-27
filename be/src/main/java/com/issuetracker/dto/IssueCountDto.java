package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssueCountDto {
    @JsonProperty("opened_issue_count")
    private Integer openedIssueCount;

    @JsonProperty("closed_issue_count")
    private Integer closedIssueCount;

    public IssueCountDto(Integer openedIssueCount, Integer closedIssueCount) {
        this.openedIssueCount = openedIssueCount;
        this.closedIssueCount = closedIssueCount;
    }

    public Integer getOpenedIssueCount() {
        return openedIssueCount;
    }

    public Integer getClosedIssueCount() {
        return closedIssueCount;
    }
}
