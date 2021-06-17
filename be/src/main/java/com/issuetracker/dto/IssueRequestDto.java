package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Label;

import java.time.LocalDateTime;
import java.util.List;

public class IssueRequestDto {
    private String title;
    private String description;
    private Long assignee;

    @JsonProperty("milestone_id")
    private Long milestoneId;

    @JsonProperty("label_ids")
    private List<Long> labelIds;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Long getAssignee() {
        return assignee;
    }

    public Long getMilestoneId() {
        return milestoneId;
    }

    public List<Long> getLabelIds() {
        return labelIds;
    }
}
