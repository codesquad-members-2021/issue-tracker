package com.codesquad.issuetracker.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Assignee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long issueId;
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
}
