package com.codesquad.issuetracker.domain.assignee;

import com.codesquad.issuetracker.domain.assignee.request.AssigneeRequest;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class Assignee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JoinColumn(name = "issue_id")
    private Long issueId;
    @JsonProperty("user_id")
    private Long userId;

    public Assignee() {
    }

    public Assignee(Long issueId, Long userId) {
        this.issueId = issueId;
        this.userId = userId;
    }

    private Assignee(Long id, Long issueId, Long userId) {
        this(issueId, userId);
        this.id = id;
    }

    public Assignee create(Long id, Long issueId, Long userId) {
         return new Assignee(id, issueId, userId);
    }

    public Long getId() {
        return id;
    }

    public Long getIssueId() {
        return issueId;
    }

    public Long getUserId() {
        return userId;
    }

    public static Assignee assigneeRequestToassignee(Long issueId, AssigneeRequest assigneeRequest) {
        return new Assignee(issueId, assigneeRequest.getUserId());
    }
}
