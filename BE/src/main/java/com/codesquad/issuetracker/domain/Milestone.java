package com.codesquad.issuetracker.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.time.LocalDateTime;

public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private final Long id;
    private String title;
    private String content;
    private LocalDateTime dueDate;
    private int openedIssue;
    private int closedIssue;

    private Milestone(Long id, String title, String content, LocalDateTime dueDate, int openedIssue, int closedIssue) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
        this.openedIssue = openedIssue;
        this.closedIssue = closedIssue;
    }

    public Milestone create(Long id, String title, String content, LocalDateTime dueDate, int openedIsssue, int closedIssue) {
        return new Milestone(id, title, content, dueDate, openedIsssue, closedIssue);
    }
}
