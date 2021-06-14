package com.codesquad.issuetracker.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Assignee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
