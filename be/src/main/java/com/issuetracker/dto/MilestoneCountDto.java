package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MilestoneCountDto {
    @JsonProperty("opened_milestone_count")
    private Integer openedCount;

    @JsonProperty("closed_milestone_count")
    private Integer closedCount;

    public MilestoneCountDto(Integer openedCount, Integer closedCount) {
        this.openedCount = openedCount;
        this.closedCount = closedCount;
    }

    public Integer getOpenedCount() {
        return openedCount;
    }

    public Integer getClosedCount() {
        return closedCount;
    }
}
