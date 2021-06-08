package com.codesquad.issuetracker.domain;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Milestone {

    @Id
    private final Long id;
    private String title;
    private String content;
    private LocalDateTime dueDate;
    private int openedIsssue;
    private int closedIssue;

    private Milestone(Long id, String title, String content, LocalDateTime dueDate, int openedIsssue, int closedIssue) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
        this.openedIsssue = openedIsssue;
        this.closedIssue = closedIssue;
    }

    public Milestone create(Long id, String title, String content, LocalDateTime dueDate, int openedIsssue, int closedIssue) {
        return new Milestone(id, title, content, dueDate, openedIsssue, closedIssue);
    }
}
