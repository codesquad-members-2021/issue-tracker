package com.codesquad.issuetracker.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssigneeRequest {

    @JsonProperty("issue_id")
    private Long issueId;

    @JsonProperty("user_id")
    private Long userId;

    public AssigneeRequest(Long issueId, Long userId) {
        this.issueId = issueId;
        this.userId = userId;
    }

    public Long getIssueId() {
        return issueId;
    }

    public Long getUserId() {
        return userId;
    }
}
