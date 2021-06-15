package com.codesquad.issuetracker.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private LocalDateTime dueDate;
    private int openedIssue;
    private int closedIssue;

    public Milestone() {
    }

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

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public int getOpenedIssue() {
        return openedIssue;
    }

    public int getClosedIssue() {
        return closedIssue;
    }
}
