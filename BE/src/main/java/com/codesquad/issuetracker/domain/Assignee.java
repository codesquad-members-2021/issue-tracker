package com.codesquad.issuetracker.domain;

import org.springframework.data.annotation.Id;

public class Assignee {

    @Id
    private final Long id;
    private Long issueId;
    private Long userId;

    private Assignee(Long id, Long issueId, Long userId) {
        this.id = id;
        this.issueId = issueId;
        this.userId = userId;
    }

    public Assignee create(Long id, Long issueId, Long userId) {
         return new Assignee(id, issueId, userId);
    }
}
