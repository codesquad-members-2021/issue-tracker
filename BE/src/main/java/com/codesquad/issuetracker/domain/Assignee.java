package com.codesquad.issuetracker.domain;

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

    private Assignee(Long id, Long issueId, Long userId) {
        this.id = id;
        this.issueId = issueId;
        this.userId = userId;
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
}
