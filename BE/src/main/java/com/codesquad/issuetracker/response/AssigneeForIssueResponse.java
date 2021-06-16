package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.Assignee;

public class AssigneeForIssueResponse {

    private Long id;
    private Long userId;

    public AssigneeForIssueResponse() {

    }

    public AssigneeForIssueResponse(Long id, Long userId) {
        this.id = id;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public static AssigneeForIssueResponse assigneeToAssigneeForIssueResponse(Assignee assignee) {
        return new AssigneeForIssueResponse(assignee.getId(), assignee.getUserId());
    }
}
